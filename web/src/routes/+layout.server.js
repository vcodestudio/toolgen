import { LoadPost } from '../lib/utils.js'

export const load = async ({ params, url }) => {
  const { pathname } = url

  const data = await LoadPost({
    post_type: 'pages',
    'filters[pathname]': pathname,
    populate: 'deep,10',
    // 'populate[0]': 'profiles',
    // 'populate[1]': 'profiles.profile_item',
    // 'populate[2]': 'profiles.profile_item.thumbnail',
  })

  const data_ = extractContent(data)

  return {
    pathname,
    page: data_,
  }
}

function extractContent(data) {
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
        // content = content.replace(/<meta.*>/g, '').replace(/&nbsp;/g, '')
        // remove lsep special character
        const imgUrl = item.img.data ? item.img.data.attributes.formats.large.url : null // 큰 이미지 URL
        result.push({ title, content, imgUrl })
        break
      default:
        result.push(item)
        break
    }
  })

  return result
}
