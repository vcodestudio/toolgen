<script>
    import Banner from "/src/components/Banner.svelte";
    import DownloadButton from "../../components/DownloadButton.svelte";
    import Section from "../../components/Section.svelte";
    import Overview from "../../components/Overview.svelte";
    import CardNews from "../../components/CardNews.svelte";
    import SectionImg from "../../components/SectionImg.svelte"
    import Pipline from "../../components/Pipline.svelte";
</script>
<Banner src="https://s3-alpha-sig.figma.com/img/d3c8/9f43/b4b8583d84c9aa2eeb0b578195389086?Expires=1690156800&Signature=JQpKJcsYXX-XkhsJgtyV8SZ24CJD8TBudgwC6cfgR4x-21JAKrY48GUo2omCDUaYmULRxxaHLbzq641sMH54LZlElZXpFeRG7fKF-2Y2w~b91Z1K1v8vaAg8tBYRZdcG52dNc2PLFM8r56N2l7O8r~gjcA7ZnTA4xst~bCGPJZgP2bzxayLH1jSyUYg5X2YX1LX61VZoPGzky9RWR1tYiUkDlaF6ENlLkG3v63PC0PTV3JW~jFyABNVl1z~xmFiB1GA8FfqhVH3SarGPEtcFCcl1hhRrv1-s0v8G7Js1oqxlL7-Gj5Mytc235~cQ92BwzzVHdHj3SOfnc8w5S4oPhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
    <h1>Crops</h1>
    <p class="max-w-[650px] em:leading-7">
        인류와 가축의 식량문제를 해결하는 방안으로 첨단육종기술인 유전자가위를 이용해 생산성향상, 환경변화적응, 병해충내성, 고부가가치의 품종을 개발하고 있습니다.    </p>
    <div class="flex-auto"></div>
    <div>
        <DownloadButton href="/" title="PDF 다운로드"/>
    </div>
</Banner>
<Section>
    <Overview>
        <p>치료제사업본부에서는 CRISPR/Cas9 응용한 기술과 치료제연구개발 전문성을 바탕으로 현재 치료방법이 증상관리뿐인 질환으로부터 고통받는 환자들을 위한 ‘genomic cure’를 개발하고 있습니다. 툴젠 연구진들은 유전체교정 플랫폼 기술과 임상적용을 위한 전달체 기술연구를 활용하여 새로운 세포 및 유전자치료제 개발에 도전하고 있습니다.
        </p>
        <p>in-vivo therapeutic platform은 유전자수준에서의 근본적인 교정을 시킬 수 있기 때문에 한 번의 처치로 장기적 또는 영구적인 치료효과를 기대할 수 있는 새로운 패러다임의 치료방법입니다. 또한 당사는 gene-editing 및 delivery 기술을 기반으로  Medical unmet need를 개선한 차세대 세포치료제를 개발하고 있습니다. Ex-vivo에서 세포의 기능을 향상시키는 당사의 기술은 다양한 세포치료제에 광범위하게 적용될 수 있다는 점에서 플랫폼 기술로서 높은 가치를 갖습니다.</p>
        <SectionImg src="/images/thera/1.png"/>
    </Overview>
</Section>
<Section class_="fill-sub">
    <div class="grid gap gap-20">
        <div class="flex gap-20">
            <h3>Pipline</h3>
            <p>종자사업본부의 종자개발사업은 약 4년 정도 됩니다. 현재 다양한 작물에 유전자교정을 시도하고 있으며 여러 프로젝트를 운영하고 있습니다. Phase I은 원하는 교정체를 선발하고 foreign gene이 없음을 확인하는 단계이며 Phase II와 III은 세대진전과 field test를 통해서 최종적으로 선발하고 소규모생산까지의 과정입니다. 상업전까지의 전체과정은 최소 6년이 걸립니다.</p>
        </div>
        <Pipline items={
            [
                { title: "고함량올레산대두", progress: 30 },
                { title: "갈변억제감자", progress: 40 },
                { title: "제초제내성옥수수", progress: 20 },
                { title: "제초제내성대두", progress: 50 },
                { title: "아크릴아마이드억제감자", progress: 70 },
                { title: "솔라닌독성억제감자", progress: 10 },
                { title: "기능성대두", progress: 30 },
                { title: "건조내성고추", progress: 90 },
                { title: "독성억제담배", progress: 20 },
                { title: "병저항성배추", progress: 10 }
            ]
        }/>
    </div>
</Section>
<Section>
    <CardNews title="Related Contents" posts={[1,1]}></CardNews>
</Section>