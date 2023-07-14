<script>
    import Banner from "/src/components/Banner.svelte";
    import DownloadButton from "../../components/DownloadButton.svelte";
    import Section from "../../components/Section.svelte";
    import Overview from "../../components/Overview.svelte";
    import CardPlus from "../../components/CardPlus.svelte";
    import CardNews from "../../components/CardNews.svelte";
    import SectionImg from "../../components/SectionImg.svelte"
    import Pipline from "../../components/Pipline.svelte";
</script>
<Banner src="https://s3-alpha-sig.figma.com/img/5e28/de33/3c32a138f0fbf242c0ea9be52d81b175?Expires=1690156800&Signature=qjRuYwJj1NLf9zRoKZ7AxkMBMr3fQvyu1SN~8H5SsgBg5~~dgwnO90RfkN0okBqgSvKVrISQIWKjqN2xnxC~X0mSPMCtPTlehlo9eS2Y1y2ARu9GR3Z9nFCzrFkF9TSgh3vlhmd~Ofcd9ZRKQlp0ixgL2z-kI7tBaOaB6CN-sQNDIBU5-TuaSm9tK-zMD6zaTntLZnCyL5~rlbOAkE-t6vyaN-8IZ3C989hz7anXpb360vP-rxT3JOV82zoTUADDt0lQNveAbbmRgQpwr8th93BFkJ4bTbQyVndkkBYF74mIIDkgiloJxYMfjmM9jeO2wYXdjRpWYlguXzT2dbEqGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
    <h1>Therapeutics</h1>
    <p class="max-w-[650px] em:leading-7">
        인류가 질병 없는 건강한 삶을 영위할 수 있도록, 유전자교정 기술을 유전자치료 및 세포치료기술과 접목하여 유전질환 및 난치질환들에 대한 치료제로 개발하기 위한 연구를 진행합니다.
    </p>
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
        <Pipline title="Vivo" items={
            [
                {
                title: "TGT-001 | Charcot-Marie-Tooth Disease",
                desc: "CNS / PNS(신경)",
                progress: 50
                },
                {
                title: "TGT-101 | Age-related Macular Degeneration",
                desc: "Eye(눈)",
                progress: 30
                },
                {
                title: "TG-LBP | Hemophilia B",
                desc: "Liver(간)",
                progress: 20
                },
                {
                title: "TG-HBV | Hepatitis B",
                desc: "Liver(간)",
                progress: 80
                }
            ]
        }/>
        <Pipline title="Ex Vivo" items={
            [
                {
                title: "Next-generation CAR-T",
                desc: "CAR-T(면역세포)",
                progress: 50
                },
                {
                title: "CREAM",
                desc: "Eye(눈)",
                progress: 70
                }
            ]
        }/>
    </div>
</Section>
<Section>
    <CardNews title="Related Contents" posts={[1,1]}></CardNews>
</Section>