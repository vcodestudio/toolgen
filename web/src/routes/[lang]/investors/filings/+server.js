import { formatDate } from '$lib/utils.js'
import {json} from "@sveltejs/kit"

const lambdaURL = "https://ybeh9zmzxb.execute-api.ap-northeast-2.amazonaws.com/get-data";

export async function handle({ event, resolve }) {
    const origin = event.request.headers.get('origin');
    const allowedOrigin = ['https://toolgen.com', 'http://toolgen.com']; // 허용할 도메인

    const response = await resolve(event);

    // 특정 origin에서 온 요청에 대해 CORS 헤더 추가
    if (allowedOrigin.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    }

    return response;
}

export async function POST({ request, fetch, url }) {
    // response return
    const req = await request.json();
    
    const path = 'https://opendart.fss.or.kr/api/list.json'
    const key = '86252bea0cdeb028b25c3b340422cc1b66fe45dc'

    const {query} = req;
    // searchparams to json
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

    const reqUrl = `${path}?${objToQuery(queryParams)}`;
    const res = await fetch(lambdaURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({url: reqUrl})
    });

    const data = await res.json()
    return json(data);
}