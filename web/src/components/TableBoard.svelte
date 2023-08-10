<script>
  import PaginationJson from './Pagination_JSON.svelte'
  import Table from './Table.svelte'

  export let posts
  let perPage = 7
  let currentPage = 1

  $: posts_ = posts.slice((currentPage - 1) * perPage, currentPage * perPage)
</script>

<Table data={[['국가', '출원번호', '출원일', '현황'], ...posts_.map(a => [a.con_name, a.title, a.date, a.state])]} />
<PaginationJson
  items={posts}
  current={currentPage}
  itemPerPage={perPage}
  on:pageTo={e => {
    currentPage = e.detail
  }}
/>
