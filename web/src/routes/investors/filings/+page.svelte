<script>
  import Section from '/src/components/Section.svelte'
  import Pagination from '../../../components/Pagination.svelte'
  import { page } from '$app/stores'

  import { formatDate } from '$lib/utils.js'

  export let data
  let posts = data.body.list

  // get 1 years ago YYYYMMDD
  const date = new Date()
  date.setFullYear(date.getFullYear() - 1)
  const oneYearAgo = formatDate(date, 'YYYYMMDD')
  let startDate = oneYearAgo

  function setStartDate(nm) {
    startDate = nm
  }

  function getDateBefore(days) {
    const date = new Date()
    date.setDate(date.getDate() - days)
    return formatDate(date, 'YYYYMMDD')
  }

  $: {
    posts = data.body.list
  }
</script>

<Section>
  <!-- filter -->
  <div class="grid gap-[1.5rem]">
    <div class="flex items-center gap-4 p:flex-col p:items-start p:gap-2">
      <h3 class="flex-auto">기간별 조회</h3>
      <p class="fg-sub">본 자료는 금융감독원 전자공시시스템 (http://dart.fss.or.kr)의 검색결과입니다.</p>
    </div>
    <div class="flex items-center w-full gap-6 board-filter p:flex-col">
      <form action="?" class="flex items-center flex-auto w-full gap-2">
        <input name="startDate" value={startDate} class="flex-auto block w-full" type="text" />
        <span class="flex-none">~</span>
        <input name="endDate" value={formatDate(new Date(), 'YYYYMMDD')} class="flex-auto block w-full" type="text" />
        <button class="fill flex-auto w-[220px]">조회</button>
      </form>
      <div class="grid grid-cols-4 basis-[500px] p:basis-auto w-full gap-2 items-center">
        <button class="flex-1" class:fill={startDate == getDateBefore(7)} on:click={e => setStartDate(getDateBefore(7))}
          >1주일</button
        >
        <button
          class="flex-1"
          class:fill={startDate == getDateBefore(31)}
          on:click={e => setStartDate(getDateBefore(31))}>1개월</button
        >
        <button
          class="flex-1"
          class:fill={startDate == getDateBefore(182)}
          on:click={e => setStartDate(getDateBefore(182))}>6개월</button
        >
        <button
          class="flex-1"
          class:fill={startDate == getDateBefore(365)}
          on:click={e => setStartDate(getDateBefore(365))}>1년</button
        >
      </div>
    </div>
    <!-- body -->
    <div class="board">
      <div class="item fg-sub text16-500 m:hidden">
        <p>번호</p>
        <p>보고서명</p>
        <p>제출인</p>
        <p>접수일자</p>
        <p>비고</p>
      </div>
      {#each posts as item, i}
        <a class="item" href={`https://dart.fss.or.kr/dsaf001/main.do?rcpNo=${item.rcept_no}`} target="_blank">
          <p>{i + 1 + data.body.page_count * (data.body.page_no - 1)}</p>
          <p>{item.report_nm}</p>
          <p>{item.flr_nm}</p>
          <p>{item.rcept_dt}</p>
          <p>{item.rm}</p>
        </a>
      {/each}
    </div>
    <Pagination maxPages={data.body.total_page} current={data.body.page_no ?? 1} query={data.query} />
  </div>
</Section>
