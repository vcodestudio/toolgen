import { LoadPost } from '$lib/utils.js'

export const load = async ({ url }) => {
  const { searchParams } = url
  const tab = searchParams.get('tab') ?? '1'

  const countries = await LoadPost({
    post_type: 'country',
    populate: ['*', 'item', 'item.img'],
  })

  const dats = await LoadPost({
    post_type: 'patents',
    populate: ['*'],
    pagination: {
      page: 1,
      pageSize: 100000,
    },
  })
  return {
    tab,
    countries,
    dats,
  }
}
