import { LoadPost } from '$lib/utils'

export const POST = async ({ request }) => {
  // get body request
  const body = await request.json()
  let res_1, res_2, data

  if (body.type) {
    switch (body.type) {
      case 'main':
        res_1 = await LoadPost({
          post_type: 'notices',
          'pagination[page]': 1,
          'pagination[pageSize]': 5,
        })
        res_2 = await LoadPost({
          post_type: 'presses',
          'pagination[page]': 1,
          'pagination[pageSize]': 5,
        })

        data = {
          notice: res_1,
          press: res_2,
        }
        break
      case 'news':
        res_2 = await LoadPost({
          post_type: 'presses',
          'pagination[page]': 1,
          'pagination[pageSize]': 5,
        })

        data = res_2
        break
    }
    // response
    return new Response(JSON.stringify(data), {
      headers: { 'content-type': 'application/json;charset=UTF-8' },
    })
  } else {
    // error
    return new Response(JSON.stringify({ error: 'invalid body' }), {
      headers: { 'content-type': 'application/json;charset=UTF-8' },
    })
  }
}
