<script>
  import Pagination from '$lib/components/Pagination.svelte'
  import Section from '$lib/components/Section.svelte'
  import { page } from '$app/stores'
  import { __e } from '$lib/utils'

  let lang = $page.params.lang

  export let data
  $: posts = data.data
</script>

<Section>
  <div class="grid gap-[1.5rem]">
    <div class="flex items-center gap-4">
      <!-- <h3 class="flex-auto">기간별 조회</h3> -->
      <!-- <p class="fg-sub">본 자료는 금융감독원 전자공시시스템 (http://dart.fss.or.kr)의 검색결과입니다.</p> -->
    </div>
    <!-- body -->
    <div class="board normal">
      <div class="item fg-sub text16-500 m:hidden">
        <p>{__e(lang, '번호')}</p>
        <p>{__e(lang, '제목')}</p>
        <p>{__e(lang, '날짜')}</p>
      </div>
      {#each posts as post, i}
        <a class="item" href={`${$page.url.pathname}/${post.id}`}>
          <p>{i + (data?.meta.pagination.page - 1) * 15 + 1}</p>
          <p class="text-left">{post.attributes.title}</p>
          <p>{post.attributes.date}</p>
        </a>
      {/each}
    </div>
    {#if data.meta}
      <Pagination maxPages={data?.meta.pagination.pageCount} current={data?.meta.pagination.page} />
    {/if}
  </div>
</Section>
