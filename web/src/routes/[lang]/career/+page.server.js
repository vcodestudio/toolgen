import { LoadPost, extractContent } from '$lib/utils.js'

export const load = async ({ params, url }) => {
  const recruit = await LoadPost({
    post_type: 'recruit',
    populate: ['*', 'item'],
  })

  return {
    recruit,
  }
}
