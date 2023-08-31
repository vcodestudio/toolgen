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

import { redirect } from '@sveltejs/kit'
import * as qs from 'qs'

export async function LoadPost(params = { post_type: 'notices', locale: 'ko-KR', page: 1, limit: 10 }) {
  const type = params.post_type
  delete params.post_type
  // convert params to query string
  // const query = Object.keys(params)
  //   .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
  //   .join('&')
  const query = qs.stringify(params, { encodeValuesOnly: true })

  const token =
    'a4533bd1babe4da25040ac073d8a3e9708cd48b2667fcd65e362fb018832920c18585b59d3e8ca5974e248cb5edb96065993f498db49766c7618b1e8acb32ff07b474802a35a357cbb92974e74413ffcb2767ab2535f5c3464afa9372063b97d43ee10aebacc4c73764c7eb9dc79a8d48052ad690dc71041b7f96aaead6d3a15'
  const req = await fetch(`http://0.0.0.0:1337/api/${type}?${query}`, {
    headers: {
      method: 'GET',
      Authorization: `Bearer ${token}`,
      cors: true,
    },
  })
  const data = await req.json()

  data.query = query

  return data
}

export function extractContent(data) {
  const result = []

  // content 항목을 순회하며 정보 추출
  data.data[0]?.attributes?.content?.forEach(item => {
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
        const imgUrl = item.img?.data ? item.img.data.attributes.formats.large.url : null // 큰 이미지 URL
        result.push({ title, content, imgUrl, item })
        break
      default:
        result.push(item)
        break
    }
  })

  return result
}

import Tr from '$lib/i18n/translate.json' assert { type: 'json' }

export function __t(route, locale = 'ko', memo = '') {
  let output = 'undefined'
  const [loc, id] = route.split('.')
  if (loc && id) {
    output = Tr.find(a => a.route == loc && a.id == id)[locale]
  } else if (loc) {
    output = Tr.find(a => a.route == route && a.ko == memo)[locale]
  }
  return output
}

export function __e(locale = 'ko', str = '') {
  let output
  output = Tr.find(a => (a.route == 'etc' || a.route == '') && a.ko == str)
  if (output[locale]) output = output[locale]
  else output = `${str} : undefined`
  return output
}
