<script>
    import PageMarginTop from "../../components/PageMarginTop.svelte"
    import Section from "../../components/Section.svelte"
</script>
<PageMarginTop/>
<Section>
    <div class="grid gap-8">
        <div class="grid gap-4">
            <div class="flex flex-col gap-0">
                <p class="color-blue text16-700">카테고리</p>
                <h3>게시글 제목</h3>
            </div>
            <div class="flex gap-4 single-line items-center fg-sub">
                <p class="body16-500 color-navy">주식회사 툴젠</p>
                <span>|</span>
                <p>2023. 07. 14</p>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <img class="block" src="/images/test-1.jpg"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur ex sint quia! Et saepe ex quibusdam? Nostrum adipisci molestiae non, hic tenetur facilis repellat! Repellat cumque beatae facilis esse?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur ex sint quia! Et saepe ex quibusdam? Nostrum adipisci molestiae non, hic tenetur facilis repellat! Repellat cumque beatae facilis esse?</p>
        </div>
        <hr/>
        <div class="flex">
            <a href="/investors">
                <button class="square navy">
                    목록으로
                </button>
            </a>
        </div>
    </div>
</Section>