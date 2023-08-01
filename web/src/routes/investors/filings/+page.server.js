import { formatDate } from '$lib/utils.js'

export const load = async ({ url, fetch, params }) => {
  const path = 'https://opendart.fss.or.kr/api/list.json'
  const key = '86252bea0cdeb028b25c3b340422cc1b66fe45dc'

  let query = url.searchParams
  // searchparams to json
  query = Object.fromEntries(query.entries())
  console.log('query', query)
  let queryParams = {
    bgn_de: query.startDate ?? '20000101',
    end_de: query.endDate ?? formatDate(new Date(), 'YYYYMMDD'),
    corp_code: '00547510',
    crtfc_key: key,
    page_count: '15',
    page_no: query.page ?? '1',
  }

  function objToQuery(obj) {
    const keyValuePairs = []
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key]
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
      }
    }
    return keyValuePairs.join('&')
  }

  const res = await fetch(`${path}?${objToQuery(queryParams)}`)
  const data = await res.json()
  return {
    body: data,
  }
}
