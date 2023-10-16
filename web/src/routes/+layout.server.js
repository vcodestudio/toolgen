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
  const data_ = extractContent(data)

  const footer = await LoadPost({
    post_type: 'setting',
    locale: langs[params.lang],
    populate: ['footer'],
  })

  return {
    pathname,
    page: data_,
    original: data.data[0]?.attributes,
    setting: footer,
  }
}
