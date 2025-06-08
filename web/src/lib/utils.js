import { dev } from '$app/environment';
import * as qs from 'qs'


// const requestURL = dev?"http://0.0.0.0":"http://toolgen.com";
const requestURL = "http://0.0.0.0";
// const requestURL = 'http://toolgen.com'

const token = dev? "d669b51cf060236e1afcce67156794b8c5a70b059d5906ec4a544db28ad9c114909e17c570c5e9d3725b34a456c5c03d0d0888c09064e22a0478a22a019eab92c610b5dd33c9d68122c8f7cf853e56a6d454823478652cd0c4c6bd24849fcdc3f2df58021b1369e8943b55598179f92b5ea43d6a473e38726c280bc2cc80dc6f":
  'a4533bd1babe4da25040ac073d8a3e9708cd48b2667fcd65e362fb018832920c18585b59d3e8ca5974e248cb5edb96065993f498db49766c7618b1e8acb32ff07b474802a35a357cbb92974e74413ffcb2767ab2535f5c3464afa9372063b97d43ee10aebacc4c73764c7eb9dc79a8d48052ad690dc71041b7f96aaead6d3a15';

// const token = "a4533bd1babe4da25040ac073d8a3e9708cd48b2667fcd65e362fb018832920c18585b59d3e8ca5974e248cb5edb96065993f498db49766c7618b1e8acb32ff07b474802a35a357cbb92974e74413ffcb2767ab2535f5c3464afa9372063b97d43ee10aebacc4c73764c7eb9dc79a8d48052ad690dc71041b7f96aaead6d3a15";

// 숫자를 두 자리로 만들어주는 함수 
export const twoDigits = num => {
  return num < 10 ? `0${num}` : num
}

export function formatDateString(str = '20121123', format = 'YYYY.MM.DD') {
  const year = str.slice(0, 4)
  const month = str.slice(4, 6)
  const day = str.slice(6, 8)
  return format.replace(/YYYY/g, year).replace(/MM/g, month).replace(/DD/g, day)
}

// convert new Date to custom format
export function formatDate(date, format = 'YYYY.MM.DD') {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  // day, month must 2 digits
  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month < 10 ? `0${month}` : month)
    .replace(/DD/g, day < 10 ? `0${day}` : day)
}

export async function LoadPost(params = { post_type: 'notices', locale: 'ko-KR', page: 1, limit: 10 }) {
  const type = params.post_type
  if (['notices', 'presses'].includes(type)) {
    params.locale = 'ko-KR'
  }
  delete params.post_type
  const query = qs.stringify(params, { encodeValuesOnly: true })

  try {
    const req = await fetch(`${requestURL}:1337/api/${type}?${query}`, {
      headers: {
        method: 'GET',
        Authorization: `Bearer ${token}`,
        cors: true,
      },
    })
    const data = await req.json()
    data.query = query
    return data
  } catch (e) {
    console.error('LoadPost fetch error:', e)
    return { data: [], error: true, message: e?.message || 'fetch failed', query }
  }
}

export function extractContent(data) {
  const result = []

  // content 항목을 순회하며 정보 추출
  if (data?.data && data.data[0]?.attributes?.content) {
    data.data[0].attributes.content.forEach(item => {
      switch (item.__component) {
        case 'page-item.content':
          const title = item.title
          let content = {
            html: item.content?.replace(/\u2028/g, ''),
            text: item.content
              ?.replace(/<[^>]*>/g, '')
              .replace(/&nbsp;/g, '')
              .replace(/\u2028/g, '\r\n')
              .replace(/\u0003/g, ''),
          }
          // remove meta tag from content, &nbsp; to break line
          if (content.html) content.html = content.html.replace('<meta charset="utf-8">', '')
          // remove lsep special character
          const imgUrl = item.img?.data
            ? item.img.data.attributes.formats.large?.url ?? item.img.data.attributes.url
            : null // 큰 이미지 URL
          const img = item.img?.data ? item.img.data?.attributes : undefined // 이미지 정보
          result.push({ title, content, imgUrl, img, item })
          break
        default:
          result.push(item)
          break
      }
    })
  }

  return result
}

import Tr from '$lib/i18n/translate.json' assert { type: 'json' }

export function __t(route, locale = 'ko', memo = '') {
  let output = 'undefined'
  const [loc, id] = route.split('.')
  if (loc && id) {
    output = Tr.find(a => a.route == loc && a.id == id)
    if (output && locale in output) output = output[locale]
  } else if (loc) {
    output = Tr.find(a => a.route == route && a.ko == memo)
    if (output && locale in output) output = output[locale]
  }
  return output
}

export function __e(locale = 'ko', str = '') {
  let output
  output = Tr.find(a => (a.route == 'etc' || a.route == '') && a.ko == str)

  if (output && locale in output) output = output[locale]
  else if (output) output = ''
  else output = `${str}`
  return output
}
