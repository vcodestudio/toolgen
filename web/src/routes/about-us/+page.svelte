<script>
    import DownloadButton from "../../components/DownloadButton.svelte"
    import MobileHeaderW from "../../components/MobileHeaderW.svelte"
import Section from "../../components/Section.svelte"
    import SectionImg from "../../components/SectionImg.svelte"
import Banner from "/src/components/Banner.svelte";
</script>
<MobileHeaderW/>
<Banner src="https://s3-alpha-sig.figma.com/img/5bed/0974/409944d86587f0b2c35f0d9631985fa2?Expires=1690156800&Signature=Eib~q6~rssePoh~XxA3~-s6hqujGh5YsQzGKXpvH-E5SsebGECuW4TfgPq18khje5KEJHY4q-swTd7lTsRA9aKQiLOEEbS3spnkIZgN0jHcTSp1gZKzoxypVBlrbbZoVXhY1V259AvIXE9zrCG3oBnGSNu5RJZpa~TuAlQBu~iMrV0YxFO8tn6jdZY55AC4X-wXmwCw7eN9WlokjL3-4578-8fLcJm89Y0fJPrzHYouzEXqEhi1IbetVD8u7du5GSmVN9R1EpBg~DQykuCan0Jk54PK0ex~lUGtGySipVBvMmtMNt1DNiFxTpTtwTOsuS7tYpxs4tD6VlA76oT7G~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
<Section class_="m:pb-0">
    <div class="w-full h-0 relative">
        <div class="
        bg-[#001B71] bg-opacity-90 bg-blend-multiply text-white absolute top-0 left-0 rounded-md p-8 translate-y-[-70%]
        m:p-4 m:-translate-y-[100%]
        ">
            <h1 class="m:text24">
                Innovate Genome,<br>
                Edit Your Life
            </h1>
        </div>
    </div>
</Section>
<Section>
    <div class="grid gap-4">
        <p class="text16-700 color-mint">About Us</p>
        <h3 class="color-navy">유전자교정 기술 선두 기업</h3>
        <p>
            툴젠은 1999년 김진수 박사(창업자)가 설립하여 유전자교정 제품의 지속적인 연구개발을 통해 ZFN 유전자가위, TALEN 유전자가위 개발에 이어 2012년 CRISPR 유전자가위 개발까지 성공한 유일한 회사이며, CRISPR 유전자가위 원천특허가 주요 9개 국가(한국, 미국, 유럽, 호주, 중국, 일본, 싱가포르, 인도, 홍콩)에 등록되어 있습니다.
        </p>
        <SectionImg src="https://s3-alpha-sig.figma.com/img/1d2a/491b/26f98af7e84223b157bd527ca9650659?Expires=1690156800&Signature=Wc9AHLQYNrLPhgwQsYIId3Xgo5om-~5BM26UkmMbZMScyebbA8TigbU4TdBA2CBotxBRtzCGMl~uOcNjL93SYPWBLbDbehbPNjdZXVxsMycPhb3ZSY2kf4VFmGOmDFm-hd1UMhY~8jxEIrGPsLSZjKn5wzcaVRORMdepHclqD6NCr5QV9kXxHcMfkUIDI-~N8~ksUSqQVKnXSV3DC6o~gRQmchlod-Rc0Q2bAUPcbNvkToYbne-hKXqupSVpmnHiEX75Y9KhG4aehE0jestQe9Fpipqu4vHS1J6jxVAF45HWEkrb~Wrg7srYqJlG510KOzRryMjAIZ8LbYd6tYmRuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        <div class="flex justify-end m:justify-center">
            <DownloadButton title="CI 다운로드"/>
        </div>
    </div>
</Section>

<Section>
    <div class="grid gap-4">
        <p class="text16-700 color-mint">ToolGen History</p>
        <div class="grid gap-12">

            <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
                <div class="grid gap-4">
                    <h3 class="color-navy">
                        1999<br>
                        툴젠 설립
                    </h3>
                    <p class="max-w-[350px]">1999년 김진수 박사(창업자)가 유전자가위를 개발하고 이를 사업화 하기 위하여 툴젠을 설립하였습니다.</p>
                </div>
                <div>
                    <img class="block w-full h-auto" src="/images/about/1.png"/>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
                <div class="grid gap-4">
                    <h3 class="color-navy">
                        1
                    </h3>
                    <p class="max-w-[350px]">1999년 김진수 박사(창업자)가 유전자가위를 개발하고 이를 사업화 하기 위하여 툴젠을 설립하였습니다.</p>
                </div>
                <div>
                    <img class="block w-full h-auto" src="/images/about/1.png"/>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
                <div class="grid gap-4">
                    <h3 class="color-navy">
                        2
                    </h3>
                    <p class="max-w-[350px]">1999년 김진수 박사(창업자)가 유전자가위를 개발하고 이를 사업화 하기 위하여 툴젠을 설립하였습니다.</p>
                </div>
                <div>
                    <img class="block w-full h-auto" src="/images/about/1.png"/>
                </div>
            </div>
            <div class="grid gap-6">
                <div class="grid gap-4">
                    <h3 class="color-navy">
                        3
                    </h3>
                    <p class="">1999년 김진수 박사(창업자)가 유전자가위를 개발하고 이를 사업화 하기 위하여 툴젠을 설립하였습니다.</p>
                    <img class="block w-full h-auto" src="/images/about/1.png"/>
                </div>
            </div>
        </div>
    </div>
</Section>
<Section class_="fill-bluegray overflow-hidden m:pb-0">
    <div class="flex gap-20 m:flex-col m:flex-col-reverse m:gap-4 m:items-center">
        <img src="/images/about/2.png" class="block translate-y-20 m:w-[170px] m:translate-y-0">
        <div class="flex flex-col gap-6 m:gap-2">
            <p class="text16-700 color-mint">Founder</p>
            <h3 class="color-navy">김진수 박사</h3>
            <p>
                김진수 박사는 1999년 ㈜툴젠 설립이후 유전체 편집을 위한 핵심 도구의 개발에 집중해왔습니다. 그 결과 초창기 편집기술인 Zinc-Finger Nucleases, Zinc-Finger Deaminases, TALENs 및 TALEDs에 이어 CRISPR-Cas9을 개발하여 전 세계에서 가장 빠르게 특허를 출원하였습니다. 김진수 박사가 개발한 이러한 도구들은 인간 줄기세포, 모델 생물체, 가축 및 식물의 핵 및 기관 세포질 DNA 유전체 편집을 위해 전 세계 수천 개의 연구실에서 널리 사용되고 있습니다.
김진수 박사는 현재 싱가포르 국립대학의 초빙교수로 활동하고 있습니다.
            </p>
        </div>
    </div>
</Section>
<Section class_="fill-navy text-white relative overflow-hidden">
    <div class="grid grid-cols-[1fr,2fr] gap-20 relative phone:grid-cols-1 phone:gap-2">
        <div>
            <h3>History</h3>
        </div>
        <div class="grid gap-8 m:gap-2">
            {#each [0,0,0,0] as item}
                <div class="flex items-center gap-4 m:items-start">
                    <p class="text16-700 flex-[1]">1999</p>
                    <p class="fg-sub flex-[1]">1월</p>
                    <p class="flex-[10]">㈜툴젠 설립 (본점소재지: 서울특별시 동작구 사당4동 267-30)</p>
                </div>
            {/each}
        </div>
    </div>
</Section>
<Section>
    <div class="grid gap-4 m:gap-2">
        <p class="text16-700 color-mint">ToolGen Location</p>
        <div class="grid grid-cols-2 gap-8 phone:grid-cols-1 m:gap-4">
            <div class="flex flex-col gap-4 m:gap-2">
                <h3 class="color-navy">툴젠 본사</h3>
                <div class="flex gap-8">
                    <p>서울 강서구 마곡중앙로 172 8층</p>
                    <p>02-3660-1300 </p>
                </div>
            </div>
            <div class="flex flex-col gap-4 m:gap-2">
                <h3 class="color-navy">오송 R&D센터</h3>
                <div class="flex gap-8">
                    충청북도 청주시 흥덕구 오송생명1로 <br class="mob"/>(오송첨단의료복합단지 내)
                </div>
            </div>
        </div>
    </div>
</Section>