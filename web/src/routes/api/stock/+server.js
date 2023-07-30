export const GET = async () => {
  // check if req is our server
  // if (req.headers.host !== 'localhost:3000') {
  //     res.status(403).send('Forbidden')
  //     return;
  // }
  // fetch data from other api, then return it
  const apiKey = 'i0M5lBilYuVahzNqlgnOE6w7mk/2Agy2DkGqTy0e8nqbzAoULt9s51ODPrJ3F/J5p/kOuG27ikys4RQGZXStow=='
  const endPoint = 'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo'
  const args = {
    serviceKey: apiKey,
    numOfRows: 5,
    pageNo: 1,
    resultType: 'json',
    isinCd: 'KR7199800004',
  }
  const query = `${endPoint}?${new URLSearchParams(args).toString()}`
  // fetch timeout 10s
  const response = await fetch(query, { timeout: 10000 })
  const data = await response.json()
  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  })
}
