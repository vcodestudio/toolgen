import { redirect } from '@sveltejs/kit'

export function load({ params }) {
  if (params.lang == 'ko') throw redirect(307, `./investors/notice`)
  else throw redirect(307, `./investors/stock`)
}
