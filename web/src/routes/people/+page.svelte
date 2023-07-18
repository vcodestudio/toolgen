<script>
    import { onMount } from "svelte"
    import BottomBanner from "../../components/BottomBanner.svelte"
    import PageMarginTop from "../../components/PageMarginTop.svelte"
    import Profiles from "../../components/Profiles.svelte"
    import Section from "../../components/Section.svelte"
    import Slider from "../../components/Slider.svelte"

</script>
<PageMarginTop/>
<Section>
    <div class="grid gap-8">
        <h1>People</h1>
        <Profiles/>
    </div>
</Section>
<Section class_="fill-yellow">
    <Slider>
        {#each [1,2,3] as i}
                <div class="swiper-slide">
                    <div class="flex gap-6 items-center phone:flex-col">
                        <div class="thumb relative w-[180px] h-[180px] flex-none">
                            <img class="block w-full h-full object-cover" src="/images/people-s.jpg" alt=".."/>
                            <svg class="absolute w-full h-full top-0 left-0 color-yellow" viewBox="0 0 357.14 357.14">
                                <path fill="currentColor" d="m0,0v357.14h357.14V0H0Zm302.6,219.43l-83.17,83.17c-45.53,45.53-119.35,45.53-164.89,0h0c-45.53-45.53-45.53-119.35,0-164.89l83.17-83.17c45.53-45.53,119.35-45.53,164.89,0h0c45.53,45.53,45.53,119.35,0,164.89Z"/>
                            </svg>
                        </div>
                        <div class="flex flex-col gap-6 flex-auto phone:gap-2">
                            <div class="flex gap-2 items-center phone:justify-center">
                                <p class="text18-700">박진수</p>
                                <p>Jinsu</p>
                                <p class="fg-sub">/ 소속</p>
                            </div>
                            <p>
                                툴젠의 사업 지원부는 어떤 문제든 해결하려는 책임감과 섬세함을 가지고 있습니다. 이 외에도 다양한 업무를 진행하면서 사람과의 커뮤니케이션이 중요함을 알아가고 있는 단계입니다. 그리고 입사 후 느끼기에는 툴젠은 혁신적인 유전자 교정 치료 목적 하에 모든 임직원들이 협업을 통해 목표를 이뤄나가고 있다고 느끼고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                {/each}
    </Slider>
</Section>
<BottomBanner src="https://s3-alpha-sig.figma.com/img/1134/9987/f3e6aea26fd341871fda94253abad52f?Expires=1690156800&Signature=BoRkKouEm2wn3rn~-1QsnecFsagzowwQmOS1qy9NJHnoxxfz0Sak0qc5UCg2JMBHc5pRcfi6cXEc2BRzgLyivQydbeeGEFkrSS08yI10kE~j1C3QitUgIHJK0LUFhL86lNYm~1cuPzhU9G1Jrh2RmV098XEpDZrDWfp2gGAPMU5q2jCVoyxOUVyrZE-c9450sfNNP8IhRRqSrsVdIfg-AIqw-fV9Sb6NIERNizHnWhIfoAERWivhR2oIUXeLx2KpnQbFKUFICv96Voy9oUgiT-b4ft4w0gaMq9lOn29Z2cTPspz5nS3vi8aA6vxsKOcwoHDKAoAhEKIr8tRAMCSpuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
    <div class="grid gap-2">
        <h2>Join Us</h2>
        <p>툴젠과 함께 혁신적인 미래를 그려갈 분을 찾습니다.<br>
            모집중인 다양한 포지션을 확인해보세요.</p>
    </div>
    <div>
        <a href="/career">
            <button class="yellow">
                Explore Careers
            </button>
        </a>
    </div>
</BottomBanner>