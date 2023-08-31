import { JSDOM } from 'jsdom'

export const load = async () => {
  const code = '199800'
  const req = await fetch(`https://finance.naver.com/item/sise.naver?code=${code}`)
  const buffer = await req.arrayBuffer()
  const decoder = new TextDecoder('euc-kr')
  const data = decoder.decode(buffer)
  const options = {
    headers: {
      'Content-Type': 'text/html;charset=EUC-KR',
      // mozilla
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    },
  }

  const doc = new JSDOM(data).window.document
  const stockInfo = getStockInfo(doc)
  const hoga = getHoga(doc)

  // fetch trade from /item/sise_time.naver?code=199800&thistime=20230802161057
  const tradePrice = await fetch(
    `https://finance.naver.com/item/sise_time.naver?code=${code}&thistime=20230802161057`,
    options,
  )
  const tradeBuffer = await tradePrice.arrayBuffer()
  const tradeData = decoder.decode(tradeBuffer)
  const tradeDoc = new JSDOM(tradeData).window.document
  const tradeTable = tradeDoc.querySelector('table')
  const trade = removeTableAttributes(tradeTable)

  // fetch daily stock price from "/item/sise_day.naver?code=199800"
  const dailyStockPrice = await fetch(`https://finance.naver.com/item/sise_day.naver?code=${code}`, options)
  const dailyStockPriceBuffer = await dailyStockPrice.arrayBuffer()
  const dailyStockPriceData = decoder.decode(dailyStockPriceBuffer)
  const dailyStockPriceDoc = new JSDOM(dailyStockPriceData).window.document
  const dailyStockPriceTable = dailyStockPriceDoc.querySelector('table')
  const daily = removeTableAttributes(dailyStockPriceTable)

  // fetch foreigner stock price from "https://navercomp.wisereport.co.kr/v2/company/c1010001.aspx?cmp_cd=005930&target=frgn"
  const foreignerStockPrice = await fetch(`https://finance.naver.com/item/frgn.naver?code=${code}`, options)
  const foreignerStockPriceBuffer = await foreignerStockPrice.arrayBuffer()
  const foreignerStockPriceData = decoder.decode(foreignerStockPriceBuffer)
  const foreignerStockPriceDoc = new JSDOM(foreignerStockPriceData).window.document
  const foreignerStockPriceTable = foreignerStockPriceDoc.querySelector('.section.inner_sub > table')
  const foreign = removeTableAttributes(foreignerStockPriceTable, false).querySelector('tbody').innerHTML

  return {
    trade,
    stockInfo,
    hoga,
    daily,
    foreign,
  }
}

function removeTableAttributes(table, isHTML = true) {
  // remove caption
  const caption = table.querySelector('caption')
  if (caption) caption.remove()
  // remove all attributes except rowspan, colspan
  const els = table.querySelectorAll('tr,td,th')
  els.forEach(el => {
    const attrs = el.attributes
    Array.from(attrs).forEach(attr => {
      if (attr.name !== 'rowspan' && attr.name !== 'colspan') {
        el.removeAttribute(attr.name)
      }
    })
  })

  // if tr contains td,th but not any text, remove tr
  const trs = table.querySelectorAll('tr')
  trs.forEach(tr => {
    const tds = tr.querySelectorAll('td,th')
    let hasText = false
    tds.forEach(td => {
      if (td.textContent) hasText = true
    })
    if (!hasText) tr.remove()
  })

  // create thead, and move ths to thead
  const thead = table.createTHead()
  const ths = table.querySelectorAll('th')
  ths.forEach(th => {
    thead.appendChild(th)
  })

  // to string
  let output
  if (isHTML) {
    output = table.outerHTML
  } else {
    output = table
  }

  return output
}

// 주요시세
function getStockInfo(document) {
  const majorPriceTable = document.querySelectorAll('.section.inner_sub table')[0]
  const majorPriceData = {}
  if (majorPriceTable) {
    const rows = majorPriceTable.querySelectorAll('tr')
    rows.forEach(row => {
      const columns = row.querySelectorAll('th, td')
      const [key1, value1, key2, value2] = Array.from(columns).map(col => col.textContent?.trim())
      // key,values are defined
      if (!(!key1 || !value1 || !key2 || !value2)) {
        majorPriceData[key1] = value1
        majorPriceData[key2] = value2
      }
    })
  }
  return Object.entries(majorPriceData)
}

// 호가
function getHoga(document) {
  const bidAskTable = document.querySelectorAll('.section.inner_sub table')[1]
  // remove caption tag, all attributes except rowspan, colspan
  const caption = bidAskTable.querySelector('caption')
  if (caption) caption.remove()
  const els = bidAskTable.querySelectorAll('tr,td,th')
  els.forEach(el => {
    const attrs = el.attributes
    Array.from(attrs).forEach(attr => {
      if (attr.name !== 'rowspan' && attr.name !== 'colspan') {
        el.removeAttribute(attr.name)
      }
    })
  })

  let html = removeTableAttributes(bidAskTable)
  return html
}
