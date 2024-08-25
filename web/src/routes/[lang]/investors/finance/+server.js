import {json} from "@sveltejs/kit"
export async function POST({ fetch, url }) {
    let data = []
    const ipcheck = [
        "10.0.0.35",
        "43.202.127.135",
        "toolgen.com"
    ];
    if(ipcheck.includes(url.hostname)) {
        const extUrl = "http://3.39.51.113";
        data = await fetch(`${extUrl}${url.pathname}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        data = await data.json()
        data = data.data;
    } else {
        // 2021년부터 현재 년도까지
        for (let i = 2020; i < new Date().getFullYear(); i++) {
          data.push({ year: i })
        }
        let promises = data.map(async item => {
            return await arrangeData(item.year, fetch)
        });
        let results = await Promise.all(promises);
        data = data.map((item, index) => {
            item.data = results[index];
            return item;
            });
    }
    return json({data})
  }
  /*
  1분기보고서 : 11013
  반기보고서 : 11012
  3분기보고서 : 11014
  사업보고서 : 11011
  */
  async function getData(year, fetch) {
    const url = 'https://opendart.fss.or.kr/api/fnlttSinglAcntAll.json'
    const param = {
      crtfc_key: '86252bea0cdeb028b25c3b340422cc1b66fe45dc',
      corp_code: '00547510', // toolgen code
      reprt_code: '11011',
      fs_div: 'OFS',
      bsns_year: year,
    }
    let parse = `${url}?${Object.entries(param)
      .map(a => a.join('='))
      .join('&')}`
  
    let res
    try {
      res = await fetch(parse)
    } catch (e) {
      res = await fetch('/dummy/data.json')
    }
    const data = await res.json()
    return data
  }
  function extractData(data, accountName) {
    if (!data) return { current: null }
    for (let item of data) {
      if (item.account_nm === accountName) {
        return {
          current: item.thstrm_amount || null,
        }
      }
    }
    return {
      current: null,
    }
  }
  
  async function arrangeData(year, fetch) {
    const res = await getData(year, fetch)
    const data = res.list
    // 데이터를 추출하는 함수를 정의합니다.
  
    // 요청한 항목을 추출합니다.
    let totalAssets = extractData(data, '자산총계')
    let totalLiab = extractData(data, '부채총계')
    let totalEquity = extractData(data, '자본총계')
    let totalRevenue = extractData(data, '매출액')
    let operatingIncome = extractData(data, '영업이익(손실)')
    let netIncome = extractData(data, '당기순이익(손실)')
  
    // 결과를 출력합니다.
    const output = [
      ['자산총계', totalAssets.current],
      ['부채총계', totalLiab.current],
      ['자본총계', totalEquity.current],
      ['매출액', totalRevenue.current],
      ['영업이익(손실)', operatingIncome.current],
      ['당기순이익(손실)', netIncome.current],
    ]
    return output
  }
  