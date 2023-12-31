import { LoadPost } from '$lib/utils'
export const load = async ({ url, fetch }) => {
  const { pathname, searchParams } = url

  const data = await LoadPost({
    post_type: 'presses',
    'pagination[page]': searchParams.get('page') ?? 1,
    'pagination[pageSize]': 15,
    'sort[0]': 'date:DESC',
  })
  return data
}
