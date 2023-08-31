import { LoadPost } from '$lib/utils.js'

export const load = async ({ url }) => {
  const { searchParams } = url
  const tab = searchParams.get('tab') ?? '1'
  return {
    tab,
  }
}
