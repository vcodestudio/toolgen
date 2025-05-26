import { LoadPost, extractContent } from '$lib/utils.js'

export const load = async ({ params, url }) => {
  const { pathname } = url

  // remove first item
  const real_pathname =
    '/' +
    pathname
      .split('/')
      .filter(a => a)
      .slice(1)
      .join('/')

  let langs = {
    ko: 'ko-KR',
    eng: 'en',
  }

  const data = await LoadPost({
    post_type: 'pages',
    filters: {
      pathname: real_pathname,
    },
    locale: langs[params.lang],
    populate: [
      '*',
      'title',
      'seo',
      'seo.thumbnail',
      'content.img',
      'content.imgs',
      'content.licenses',
      'content.history',
      'content.item',
      'content.item.img',
      'content.item.thumbnail',
      'content.item.thumb',
      'content.item.detail_image',
      // 'notices',
      // 'presses',
    ],
  })
  const data_ = data?.error ? [] : extractContent(data)

  const footer = await LoadPost({
    post_type: 'setting',
    locale: langs[params.lang],
    populate: ['footer'],
  })

  // 팝업: 싱글타입 + 다국어 + 배열(popups) 구조에 맞게 locale 적용
  const popup = await LoadPost({
    post_type: 'popup',
    locale: langs[params.lang],
    populate: ['popups', 'popups.img'],
  });

  console.log('popup', popup)

  return {
    pathname,
    page: data_,
    original: data?.data?.[0]?.attributes ?? {},
    setting: footer?.error ? { data: { attributes: { footer: [] } } } : footer,
    popup: popup?.error ? { data: { attributes: { popups: [] } } } : popup,
  }
}
