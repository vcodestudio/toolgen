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
    <div class="grid gap gap-20 m:gap-4">
        <div class="flex gap-20 m:flex-col m:gap-4">
            <div class="flex items-center leading-[1em]">
                <h3 class="flex-auto">Pipline</h3>
                <div class="flex-none h-[20px] mob">
                    <svg class="h-full w-auto" viewBox="0 0 53 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.19336 5.46995L7.72861 11.0002L2.19336 16.5304L3.1373 17.4735L9.14453 11.4717C9.40519 11.2113 9.40519 10.7891 9.14453 10.5286L3.1373 4.52686L2.19336 5.46995ZM6.86003 5.46995L12.3953 11.0002L6.86003 16.5304L7.80397 17.4735L13.8112 11.4717C14.0719 11.2113 14.0719 10.7891 13.8112 10.5286L7.80397 4.52686L6.86003 5.46995Z" fill="#337DD9"/>
                        <path d="M25.068 11.012C24.914 10.396 24.438 9.99 23.556 9.976C22.646 9.99 22.002 10.48 21.988 11.096C22.002 11.586 22.394 11.922 23.276 12.132L24.368 12.412C25.698 12.734 26.356 13.392 26.356 14.428C26.356 15.702 25.306 16.654 23.444 16.668C21.778 16.654 20.784 15.912 20.588 14.568H21.82C21.96 15.282 22.478 15.632 23.416 15.632C24.48 15.632 25.138 15.184 25.152 14.484C25.138 13.966 24.76 13.616 23.92 13.42L22.8 13.168C21.512 12.86 20.826 12.16 20.812 11.152C20.826 9.892 21.932 8.982 23.556 8.968C25.11 8.982 26.076 9.794 26.216 11.012H25.068ZM30.7213 16.668C28.6213 16.654 27.3333 15.044 27.3333 12.832C27.3333 10.564 28.6773 8.982 30.6933 8.968C32.2753 8.982 33.4653 9.92 33.6613 11.32H32.4853C32.3033 10.634 31.7153 10.018 30.7213 10.032C29.3913 10.018 28.5093 11.11 28.5093 12.776C28.5093 14.498 29.3773 15.604 30.7213 15.604C31.6033 15.604 32.2613 15.128 32.4853 14.316H33.6613C33.4653 15.646 32.3733 16.654 30.7213 16.668ZM34.8931 16.5V9.08H36.0411V10.2H36.1251C36.3911 9.458 37.1751 8.954 38.0571 8.968C38.2251 8.954 38.5191 8.968 38.6451 8.968V10.172C38.5751 10.144 38.2531 10.088 37.9451 10.088C36.8811 10.088 36.0831 10.83 36.0971 11.824V16.5H34.8931ZM42.4072 16.668C40.3912 16.654 39.0192 15.128 39.0192 12.832C39.0192 10.508 40.3912 8.982 42.4072 8.968C44.4233 8.982 45.7813 10.508 45.7673 12.832C45.7813 15.128 44.4233 16.654 42.4072 16.668ZM40.1952 12.832C40.1952 14.302 40.8952 15.604 42.4072 15.604C43.9053 15.604 44.6052 14.302 44.5913 12.832C44.6052 11.348 43.9053 10.018 42.4072 10.032C40.8952 10.018 40.1952 11.348 40.1952 12.832ZM48.2889 6.588V16.5H47.0849V6.588H48.2889ZM51.1378 6.588V16.5H49.9338V6.588H51.1378Z" fill="#337DD9"/>
                    </svg>
                </div>
            </div>
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