import { formatDate } from '$lib/utils.js'
import {json} from "@sveltejs/kit"

export async function POST({ request, fetch }) {
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

    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 10000);

    const reqUrl = `${path}?${objToQuery(queryParams)}`;
    const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        signal,
    });
    console.log(reqUrl);
    const data = await res.json()
    return json(data);
}