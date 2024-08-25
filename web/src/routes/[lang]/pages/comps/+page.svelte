<script>
  import Section from '$lib/components/Section.svelte'
  import Banner from '$lib/components/Banner.svelte'
  import CardNews from '$lib/components/CardNews.svelte'
  import { popup } from '$lib/screen'
  import Overview from '$lib/components/Overview.svelte'
  import { twoDigits } from '$lib/utils'
  import Profiles from '$lib/components/Profiles.svelte'
  import BottomBanner from '$lib/components/BottomBanner.svelte'
  // import AccordionB from '$lib/components/AccordionB.svelte'
  import CardPlus from '$lib/components/CardPlus.svelte'
  import Pipline from '$lib/components/Pipline.svelte'
  import DownloadButton from '$lib/components/DownloadButton.svelte'
  import Licensing from '$lib/components/Licensing.svelte'
</script>

<Banner
  src="https://s3-alpha-sig.figma.com/img/5e28/de33/3c32a138f0fbf242c0ea9be52d81b175?Expires=1690156800&Signature=qjRuYwJj1NLf9zRoKZ7AxkMBMr3fQvyu1SN~8H5SsgBg5~~dgwnO90RfkN0okBqgSvKVrISQIWKjqN2xnxC~X0mSPMCtPTlehlo9eS2Y1y2ARu9GR3Z9nFCzrFkF9TSgh3vlhmd~Ofcd9ZRKQlp0ixgL2z-kI7tBaOaB6CN-sQNDIBU5-TuaSm9tK-zMD6zaTntLZnCyL5~rlbOAkE-t6vyaN-8IZ3C989hz7anXpb360vP-rxT3JOV82zoTUADDt0lQNveAbbmRgQpwr8th93BFkJ4bTbQyVndkkBYF74mIIDkgiloJxYMfjmM9jeO2wYXdjRpWYlguXzT2dbEqGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
>
  <h1>Therapeutics</h1>
  <p class="max-w-3xl em:leading-7">
    인류가 질병 없는 건강한 삶을 영위할 수 있도록, 유전자교정 기술을 유전자치료 및 세포치료기술과 접목하여 유전질환 및
    난치질환들에 대한 치료제로 개발하기 위한 연구를 진행합니다.
  </p>
  <div class="flex-auto" />
  <div>
    <!-- <DownloadButton href="/" title="다운로드" /> -->
  </div>
</Banner>
<Section>
  <Overview>
    <p>
      치료제사업본부에서는 CRISPR-Cas9 응용한 기술과 치료제연구개발 전문성을 바탕으로 현재 치료방법이 증상관리뿐인
      질환으로부터 고통받는 환자들을 위한 ‘genomic cure’를 개발하고 있습니다. 툴젠 연구진들은 유전체교정 플랫폼 기술과
      임상적용을 위한 전달체 기술연구를 활용하여 새로운 세포 및 유전자치료제 개발에 도전하고 있습니다.
    </p>
    <p>
      in-vivo therapeutic platform은 유전자수준에서의 근본적인 교정을 시킬 수 있기 때문에 한 번의 처치로 장기적 또는
      영구적인 치료효과를 기대할 수 있는 새로운 패러다임의 치료방법입니다. 또한 당사는 gene-editing 및 delivery 기술을
      기반으로 Medical unmet need를 개선한 차세대 세포치료제를 개발하고 있습니다. Ex-vivo에서 세포의 기능을 향상시키는
      당사의 기술은 다양한 세포치료제에 광범위하게 적용될 수 있다는 점에서 플랫폼 기술로서 높은 가치를 갖습니다.
    </p>
    <img
      src="https://s3-alpha-sig.figma.com/img/4be2/a6d3/05ce2867067bb8538d6cdefa4b3d7146?Expires=1690156800&Signature=abk9GRHBF4IihEA1nw6YVXDWJD2ZrlLrFNMRAUGbx8~We9Gadae24Qcz6XgqNZgxPMlKpkBDJQHyIDNHytJ1sRLhWwi~TqVjxUW-r2yzung0UgleU2VyGNWsleCFLwvx2L9aI6z8e0OnsAg9V4-oAmg11YphNwumE~lce6QjJR5GIfjhseHl6USKnGomgzFddMrdhmbLAvBJcScAEnp6cu73pt4oL9EE05U4F94T0t6gg3PNhPRvyI~JVAJ19mquQ8g7HWvAxqh0BS0niKV0m-WcTM0XMrxsjwF0g1gMNoehD07LB1IVByfzc8Zam8mqFnjqlg8vAnrd2FE0Aq0UyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    />
  </Overview>
</Section>
<Section>
  <Overview>
    <p>
      유전자가위 기술은 다양한 분야에 적용이 가능한 플랫폼 기술(기존 의약품에 적용하여 다수의 후보 물질을 도출할 수 있는
      기반 기술)의 특징을 가지고 있습니다. 전 세계적으로 다양한 연구를 통해 유전자 가위 고도화 및 안전성 평가 측정 기술
      등이 발전되고 있으며 툴젠은 우수한 플랫폼 특허 선점을 위한 연구를 진행 중입니다. 또한 이러한 플랫폼 기술을
      응용하여 새로운 사업확장을 목표로 연구하고 있습니다.
    </p>
    <div class="grid gap-6">
      <CardPlus />
    </div>
  </Overview>
</Section>
<Section class_="fill-sub">
  <div class="grid gap-20 gap">
    <div class="flex gap-20">
      <h3>Pipline</h3>
      <p>
        종자사업본부의 종자개발사업은 약 4년 정도 됩니다. 현재 다양한 작물에 유전자교정을 시도하고 있으며 여러
        프로젝트를 운영하고 있습니다. Phase I은 원하는 교정체를 선발하고 foreign gene이 없음을 확인하는 단계이며 Phase
        II와 III은 세대진전과 field test를 통해서 최종적으로 선발하고 소규모생산까지의 과정입니다. 상업전까지의
        전체과정은 최소 6년이 걸립니다.
      </p>
    </div>
    <Pipline
      title="Vivo"
      items={[
        {
          title: 'TGT-001 | Charcot-Marie-Tooth Disease',
          desc: 'CNS / PNS(신경)',
          progress: 50,
        },
        {
          title: 'TGT-101 | Age-related Macular Degeneration',
          desc: 'Eye(눈)',
          progress: 30,
        },
        {
          title: 'TG-LBP | Hemophilia B',
          desc: 'Liver(간)',
          progress: 20,
        },
        {
          title: 'TG-HBV | Hepatitis B',
          desc: 'Liver(간)',
          progress: 80,
        },
      ]}
    />
    <Pipline
      title="Ex Vivo"
      items={[
        {
          title: 'Next-generation CAR-T',
          desc: 'CAR-T(면역세포)',
          progress: 50,
        },
        {
          title: 'CREAM',
          desc: 'Eye(눈)',
          progress: 70,
        },
      ]}
    />
  </div>
</Section>
<Section>
  <CardNews title="Relation Contents" posts={[1, 1]} />
</Section>
<Section>
  <div class="flex flex-col gap-6">
    <h1>Licensing</h1>
    <img
      src="https://s3-alpha-sig.figma.com/img/f42a/d296/d1bf58648d76693c7bc7353df7eefcd8?Expires=1690156800&Signature=gdp6qNcIrmWxAK6LnORIpZRvuePNXscE2mjY5T7DAD42Lyp8UR7SEat4mNMZ0Pu7r~~XI~lC5Or1z5MmYVaq1uFa38ppWs9sbDGzV2cHJHRYZ2j3-gDtiKQVaHvN6Fji9FFer1in3OFOw6Oq7aX0ORz3YX7fnw2-7PyiZGnDkWWiAbGK-WkLHd~TJQcDfmxaF09oEmaaDpdaFeY4u30oZRhb~ZBLg7kzJep8KvUb0xtZNXkY4Ulh5q0FeZqS4afIJwVNjVAHc1OgdAVAgSvXnE858piNK5sCesDd1vS3iiiV5gT~5oqIcVw1GKk2wfvhQtvFxq~NaZPHeFBdARw4qQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    />
  </div>
</Section>
<Section>
  <div class="flex flex-col gap-6">
    <h3>Stronger Together</h3>
    <p>
      툴젠은 CRISPR 유전자가위 원천기술을 다양한 분야에 라이센싱하여 함께 성장하고자 합니다. CRISPR-Cas9 원천 특허권자인
      툴젠은 전략적인 특허 관리 및 활용을 위해 국내외 변호사/변리사 및 특허 전문가 그리고 라이센싱 전문가로 구성된
      IP사업본부를 운영하고 있습니다.
    </p>
  </div>
</Section>
<Section class_="fill-navy text-white">
  <div class="grid grid-cols-2 gap-6 w-limit">
    <div class="flex flex-col gap-6">
      <h3>라이센싱 문의</h3>
      <p>
        툴젠의 CRISPR 유전자가위 특허 라이센싱과 관련하여 문의가 있으신 경우, 분야를 선택하신 후 양식을 채워주시면
        담당자가 연락드리겠습니다.
      </p>
    </div>
    <div>
      <Licensing />
    </div>
  </div>
</Section>
<Section>
  <div class="grid gap-6">
    <h3>FAQ</h3>
    <!-- <AccordionB /> -->
  </div>
</Section>
<BottomBanner>
  <div class="grid gap-2">
    <h2>Join Us</h2>
    <p>
      툴젠과 함께 혁신적인 미래를 그려갈 분을 찾습니다.<br />
      모집중인 다양한 포지션을 확인해보세요.
    </p>
  </div>
  <div>
    <button class="yellow"> Explore Careers </button>
  </div>
</BottomBanner>
<Section>
  <Profiles />
</Section>
