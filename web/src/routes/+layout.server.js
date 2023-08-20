import { LoadPost, extractContent } from '../lib/utils.js'

export const load = async ({ params, url }) => {
  const { pathname } = url

  const data = await LoadPost({
    post_type: 'pages',
    filters: {
      pathname: pathname,
    },
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
      'notices',
      'presses',
    ],
  })
  const data_ = extractContent(data)

  return {
    pathname,
    page: data_,
    original: data.data[0]?.attributes,
  }
}
