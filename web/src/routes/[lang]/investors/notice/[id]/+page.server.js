import { LoadPost, extractContent } from '$lib/utils'
import { redirect } from '@sveltejs/kit'
export const load = async ({ params }) => {
  const data = await LoadPost({
    post_type: 'notices',
    filters: {
      id: params.id,
    },
    populate: ['*', 'files'],
  })

  if (data) {
    return {
      post: data,
    }
  } else {
    throw redirect('/404')
  }
}
