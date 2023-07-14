<script>
    import Board from "../../components/Board.svelte"
    import BoardFilter from "../../components/BoardFilter.svelte"
    import Pagination from "../../components/Pagination.svelte"
    import Section from "../../components/Section.svelte"
</script>

<Section>
    <div class="grid gap-[1.5rem]">
        <div class="flex gap-4 items-center">
            <h3 class="flex-auto">기간별 조회</h3>
            <p class="fg-sub">본 자료는 금융감독원 전자공시시스템 (http://dart.fss.or.kr)의 검색결과입니다.</p>
        </div>
        <BoardFilter/>
        <Board/>
        <Pagination/>
    </div>
</Section>