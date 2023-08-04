import { LoadPost, extractContent } from '../lib/utils.js'

export const load = async ({ params, url }) => {
  const { pathname } = url

  const data = await LoadPost({
    post_type: 'pages',
    'filters[pathname]': pathname,
    populate: 'deep,10',
  })

  const data_ = extractContent(data)

  return {
    pathname,
    page: data_,
    original: data,
  }
}
