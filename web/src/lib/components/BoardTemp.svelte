<script>
  import Pagination from './Pagination.svelte'
</script>

<div class="grid gap-[1.5rem]">
  <div class="flex gap-4 items-center p:flex-col p:items-start p:gap-2">
    <h3 class="flex-auto">기간별 조회</h3>
    <p class="fg-sub">본 자료는 금융감독원 전자공시시스템 (http://dart.fss.or.kr)의 검색결과입니다.</p>
  </div>
  <div class="board-filter flex gap-6 items-center w-full p:flex-col">
    <div class="flex-auto flex gap-2 items-center w-full">
      <input class="block flex-auto w-full" type="text" />
      <span class="flex-none">~</span>
      <input class="block flex-auto w-full" type="text" />
      <button class="fill flex-auto w-[220px]">조회</button>
    </div>
    <div class="grid grid-cols-4 basis-[500px] p:basis-auto w-full gap-2 items-center">
      <button class="flex-1">1주일</button>
      <button class="flex-1">1개월</button>
      <button class="flex-1">6개월</button>
      <button class="flex-1">1년</button>
    </div>
  </div>

  <div class="board">
    <div class="item fg-sub text16-500 m:hidden">
      <p>번호</p>
      <p>보고서명</p>
      <p>제출인</p>
      <p>접수일자</p>
      <p>비고</p>
    </div>
    {#each [0, 0, 0] as item}
      <a class="item" href="/post">
        <p>1</p>
        <p>[기재정정]신규시설투자등</p>
        <p>툴젠</p>
        <p>2023.01.06</p>
        <p>-</p>
      </a>
    {/each}
  </div>
  <Pagination />
</div>
