<script>
  import PaginationJson from './Pagination_JSON.svelte'
  import Table from './Table.svelte'
  import { page } from '$app/stores'
  import { __e } from '$lib/utils'

  let lang = $page.params.lang

  export let posts
  let perPage = 7
  let currentPage = 1

  $: posts_ = posts.slice((currentPage - 1) * perPage, currentPage * perPage)
</script>

<Table
  data={[
    [__e(lang, '국가'), __e(lang, '출원번호'), __e(lang, '출원일'), __e(lang, '현황')],
    ...posts_.map(a => [a.con_name, a.title, a.date, a.state]),
  ]}
/>
<PaginationJson
  items={posts}
  current={currentPage}
  itemPerPage={perPage}
  on:pageTo={e => {
    currentPage = e.detail
  }}
/>
