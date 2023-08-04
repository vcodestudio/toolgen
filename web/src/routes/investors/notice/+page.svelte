<script>
  import Pagination from '../../../components/Pagination.svelte'
  import Section from '../../..//components/Section.svelte'

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
        <p>번호</p>
        <p>제목</p>
        <p>날짜</p>
      </div>
      {#each posts as post, i}
        <a class="item" href={`/notice/${post.id}`}>
          <p>{post.id}</p>
          <p>{post.attributes.title}</p>
          <p>{post.attributes.date}</p>
        </a>
      {/each}
    </div>
    {#if data.meta}
      <Pagination maxPages={data?.meta.pagination.pageCount} current={data?.meta.pagination.page} />
    {/if}
  </div>
</Section>
