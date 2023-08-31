import { LoadPost, extractContent } from '$lib/utils'
import { redirect } from '@sveltejs/kit'
export const load = async ({ params }) => {
  let data = await LoadPost({
    post_type: 'presses',
    filters: {
      id: params.id,
    },
  })

  if (data) {
    return {
      post: data,
    }
  } else {
    throw redirect('/404')
  }
}
