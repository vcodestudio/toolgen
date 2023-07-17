<script>
    import Licensing from "../../components/Licensing.svelte"
import PageMarginTop from "../../components/PageMarginTop.svelte"
import Section from "../../components/Section.svelte"
    import SectionImg from "../../components/SectionImg.svelte"
import BottomBanner from "../../components/BottomBanner.svelte"
import AccordionB from "../../components/AccordionB.svelte"
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
        <AccordionB/>
    </div>
</Section>
<BottomBanner>
    
</BottomBanner>