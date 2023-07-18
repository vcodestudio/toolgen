<script>
    import Licensing from "../../components/Licensing.svelte"
import PageMarginTop from "../../components/PageMarginTop.svelte"
import Section from "../../components/Section.svelte"
    import SectionImg from "../../components/SectionImg.svelte"
import BottomBanner from "../../components/BottomBanner.svelte"
    import AccordionItem from "../../components/AccordionItem.svelte"
</script>
<PageMarginTop/>
<Section>
    <div class="grid gap-6">
        <h1>Licensing</h1>
        <SectionImg src="/images/licensing/1.png"/>
    </div>
</Section>
<Section>
    <div class="grid gap-4">
        <h3>Stronger Together</h3>
        <p>
            툴젠은 CRISPR 유전자가위 원천기술을 다양한 분야에 라이센싱하여 함께 성장하고자 합니다. CRISPR/Cas9 원천 특허권자인 툴젠은 전략적인 특허 관리 및 활용을 위해 국내외 변호사/변리사 및 특허 전문가 그리고 라이센싱 전문가로 구성된 IP사업본부를 운영하고 있습니다.
        </p>
    </div>
</Section>
<Section class_="fill-navy text-white">
    <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
        <div class=" flex flex-col gap-6">
            <h3>라이센싱 문의</h3>
            <p>툴젠의 CRISPR 유전자가위 특허 라이센싱과 관련하여 문의가 있으신 경우,
                분야를 선택하신 후 양식을 채워주시면 담당자가 연락드리겠습니다.</p>
        </div>
        <div>
            <Licensing/>
        </div>
    </div>
</Section>
<Section>
    <div class="grid gap-6">
        <h3>FAQ</h3>
        <div class="grid gap-6 m:gap-4">
            <AccordionItem
                index="1"
                name="CRISPR-Cas9을 이용한 유전자 교정 기술을 사용하면, 툴젠 특허를 침해하나요?">
                <div class="grid gap-4">
                    <p>툴젠은 CRISPR-Cas9을 진핵세포에 적용하는 원천기술을 보유하고 이에 대한 특허를 보유하고 있습니다. 또한, CRISPR-Cas9의 작용을 정교화 하거나 응용한 기술의 특허들도 보유하고 있습니다. 관련하여 툴젠은 전세계 주요국에 200여건의 특허 출원을 보유하고 있고, 84건의 등록특허를 보유하고 있습니다. CRISPR-Cas9를 이용한 치료제/신약, 식물체/종자, 동물, 연구도구, 세포주/모델동물 등을 개발하여 상업화하는 기업 그리고, CROs/CMOs 업체 등이 툴젠 특허의 라이선스가 필요합니다</p>
                    <div class="grid grid-cols-2 gap-4 gap-y-6">
                        {#each [0,0,0,0] as item}
                            <div class="flex gap-4 items-center p-4 rounded-md fill-light-blue">
                                <img class="block text-[64px] w-[1em] h-[1em]" src="/images/about-1.png"/>
                                <div class="flex flex-col gap-0">
                                    <p class="text16-700">치료제/신약</p>
                                    <p>Therapeutics and Drugs</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </AccordionItem>
        </div>
    </div>
</Section>
<BottomBanner>
    
</BottomBanner>