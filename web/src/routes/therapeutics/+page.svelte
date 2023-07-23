<script>
  import Banner from '/src/components/Banner.svelte'
  import DownloadButton from '../../components/DownloadButton.svelte'
  import Section from '../../components/Section.svelte'
  import Overview from '../../components/Overview.svelte'
  import CardNews from '../../components/CardNews.svelte'
  import SectionImg from '../../components/SectionImg.svelte'
  import Pipline from '../../components/Pipline.svelte'
  import MobileHeaderW from '../../components/MobileHeaderW.svelte'
</script>

<MobileHeaderW />
<Banner
  src="https://s3-alpha-sig.figma.com/img/5e28/de33/3c32a138f0fbf242c0ea9be52d81b175?Expires=1690156800&Signature=qjRuYwJj1NLf9zRoKZ7AxkMBMr3fQvyu1SN~8H5SsgBg5~~dgwnO90RfkN0okBqgSvKVrISQIWKjqN2xnxC~X0mSPMCtPTlehlo9eS2Y1y2ARu9GR3Z9nFCzrFkF9TSgh3vlhmd~Ofcd9ZRKQlp0ixgL2z-kI7tBaOaB6CN-sQNDIBU5-TuaSm9tK-zMD6zaTntLZnCyL5~rlbOAkE-t6vyaN-8IZ3C989hz7anXpb360vP-rxT3JOV82zoTUADDt0lQNveAbbmRgQpwr8th93BFkJ4bTbQyVndkkBYF74mIIDkgiloJxYMfjmM9jeO2wYXdjRpWYlguXzT2dbEqGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
>
  <h1>Therapeutics</h1>
  <p class="max-w-[650px] em:leading-7">
    인류가 질병 없는 건강한 삶을 영위할 수 있도록, 유전자교정 기술을 유전자치료 및 세포치료기술과 접목하여 유전질환 및
    난치질환들에 대한 치료제로 개발하기 위한 연구를 진행합니다.
  </p>
  <div class="flex-auto" />
  <div>
    <DownloadButton href="/" title="PDF 다운로드" />
  </div>
</Banner>
<Section>
  <Overview>
    <p>
      치료제사업본부에서는 CRISPR/Cas9 응용한 기술과 치료제연구개발 전문성을 바탕으로 현재 치료방법이 증상관리 뿐인
      질환으로부터 고통받는 환자들을 위한 ‘genomic cure’를 개발하고 있습니다. 툴젠 연구진들은 유전체교정 플랫폼 기술과
      임상적용을 위한 전달체 기술연구를 활용하여 새로운 세포 및 유전자치료제 개발에 도전하고 있습니다.
    </p>
    <p>
      in-vivo therapeutic platform은 유전자수준에서의 근본적인 교정을 시킬 수 있기 때문에 한 번의 처치로 장기적 또는
      영구적인 치료효과를 기대할 수 있는 새로운 패러다임의 치료방법입니다. 또한 당사는 gene-editing 및 delivery 기술을
      기반으로 Medical unmet need를 개선한 차세대 세포치료제를 개발하고 있습니다. Ex-vivo에서 세포의 기능을 향상시키는
      당사의 기술은 다양한 세포치료제에 광범위하게 적용될 수 있다는 점에서 플랫폼 기술로서 높은 가치를 갖습니다.
    </p>
    <SectionImg src="/images/thera/1.png" />
  </Overview>
</Section>
<Section class_="fill-sub">
  <div class="grid gap gap-20 m:gap-4">
    <div class="flex gap-20 m:flex-col m:gap-4">
      <div class="flex items-center leading-[1em]">
        <h3 class="flex-auto">Pipeline</h3>
        <div class="flex-none h-[20px] mob">
          <svg class="h-full w-auto" viewBox="0 0 53 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.19336 5.46995L7.72861 11.0002L2.19336 16.5304L3.1373 17.4735L9.14453 11.4717C9.40519 11.2113 9.40519 10.7891 9.14453 10.5286L3.1373 4.52686L2.19336 5.46995ZM6.86003 5.46995L12.3953 11.0002L6.86003 16.5304L7.80397 17.4735L13.8112 11.4717C14.0719 11.2113 14.0719 10.7891 13.8112 10.5286L7.80397 4.52686L6.86003 5.46995Z"
              fill="#337DD9"
            />
            <path
              d="M25.068 11.012C24.914 10.396 24.438 9.99 23.556 9.976C22.646 9.99 22.002 10.48 21.988 11.096C22.002 11.586 22.394 11.922 23.276 12.132L24.368 12.412C25.698 12.734 26.356 13.392 26.356 14.428C26.356 15.702 25.306 16.654 23.444 16.668C21.778 16.654 20.784 15.912 20.588 14.568H21.82C21.96 15.282 22.478 15.632 23.416 15.632C24.48 15.632 25.138 15.184 25.152 14.484C25.138 13.966 24.76 13.616 23.92 13.42L22.8 13.168C21.512 12.86 20.826 12.16 20.812 11.152C20.826 9.892 21.932 8.982 23.556 8.968C25.11 8.982 26.076 9.794 26.216 11.012H25.068ZM30.7213 16.668C28.6213 16.654 27.3333 15.044 27.3333 12.832C27.3333 10.564 28.6773 8.982 30.6933 8.968C32.2753 8.982 33.4653 9.92 33.6613 11.32H32.4853C32.3033 10.634 31.7153 10.018 30.7213 10.032C29.3913 10.018 28.5093 11.11 28.5093 12.776C28.5093 14.498 29.3773 15.604 30.7213 15.604C31.6033 15.604 32.2613 15.128 32.4853 14.316H33.6613C33.4653 15.646 32.3733 16.654 30.7213 16.668ZM34.8931 16.5V9.08H36.0411V10.2H36.1251C36.3911 9.458 37.1751 8.954 38.0571 8.968C38.2251 8.954 38.5191 8.968 38.6451 8.968V10.172C38.5751 10.144 38.2531 10.088 37.9451 10.088C36.8811 10.088 36.0831 10.83 36.0971 11.824V16.5H34.8931ZM42.4072 16.668C40.3912 16.654 39.0192 15.128 39.0192 12.832C39.0192 10.508 40.3912 8.982 42.4072 8.968C44.4233 8.982 45.7813 10.508 45.7673 12.832C45.7813 15.128 44.4233 16.654 42.4072 16.668ZM40.1952 12.832C40.1952 14.302 40.8952 15.604 42.4072 15.604C43.9053 15.604 44.6052 14.302 44.5913 12.832C44.6052 11.348 43.9053 10.018 42.4072 10.032C40.8952 10.018 40.1952 11.348 40.1952 12.832ZM48.2889 6.588V16.5H47.0849V6.588H48.2889ZM51.1378 6.588V16.5H49.9338V6.588H51.1378Z"
              fill="#337DD9"
            />
          </svg>
        </div>
      </div>
    </div>
    <Pipline
      title="Vivo"
      items={[
        {
          title: 'TGT-001 | Charcot-Marie-Tooth Disease',
          desc: 'CNS / PNS(신경)',
          progress: 50,
          content: `
          TGT-001은 PMP22 유전자 중복에 의해 발생하는 유전질병인 CMT1A에 대한 유 전자교정 치료 프로그램입니다. 전세계에 100 만명 이상의 환자가 있는 CMT1A는 유전자 중복에 의해 PMP22 유전자가 과발현되고 이로 인해 말초신경(PNS)의 탈 수초화 (dem-yelination)가 일어나 생기는 질병으로 다른 많은 유전병처럼 아직 근본적인 치료법이 없기 때문에 의료적 미충족수요가 높습니다. 툴젠은 유전자교정 을 이용한 PMP22 유전자 발현 조절 기술을 바탕으로 CMT1A의 근본 원인을 교정 하여 완치를 목표로 한 TGT-001을 개발하고 있으며, 현재 동물 실험을 통해 치료 전략에 대한 검증을 마쳤습니다.
          `,
        },
        {
          title: 'TGT-101 | Age-related Macular Degeneration',
          desc: 'Eye(눈)',
          progress: 30,
          content: `
                <p>
                <span class="color-navy font-bold">습성 황반변성</span><br>
                습성 황반변성은 황반 아래에서 비정상적인 신생혈관이 자라나 황반을 손상시키고 시력을 저하시키는 질병입니다. 고령화가 빠르게 진행되고 있는 현대 사회에서 나이와 관련한 황반변성 환자는 지속적으로 증가하고 있고 이에 관련한 연구가 계속되고 있습니다.
                </p>
                <p>
                <span class="color-blue font-bold">툴젠 TGT-101 프로그램</span><br>
                툴젠은 유전자 교정을 이용하여 신생혈관 생성과 관련 되어있는 VEGF 혹은 HIF1A 유전자 발현을 억제하는 기술을 바탕으로 새로운 치료제 (TGT101) 개발을 수행하고 있습니다. 현재 치료제 시장에 시판되고 있는 약물이 가지는 최대 약점인 1달 주기로 안구에 주사치료를 받아야하는 불편함을 개선하고, 기존의 치료 기전과는 다른 새로운 기전을 통하여 완치를 목표로 한 TGT-101을 개발하고 있습니다. 현재 동물 실험을 통해 치료 전략에 대한 검증작업을 수행하고 있습니다.
                </p>
          `,
        },
        {
          title: 'TG-LBP | Hemophilia B',
          desc: 'Liver(간)',
          progress: 20,
          content: `
          다양한 질환에 적용이 가능한 유전자가위 치료제 플랫폼 기술입니다. 툴젠에서 자체적으로 발굴한 발현이 높은 safe harbor 유전자인 APOC3를 활용하여 치료적으로 필요한 유전자를 APOC3 locus에 삽입하는 치료전략을 가지고 있습니다. 현재는 Hemophilia B 환자들에게 결핍되어 있는 Factor 9 유전자를 유전자 가위를 활용하여 APOC3에 삽입하는 전략을 회사 내부에서의 동물 실험을 통해 치료 효율 검증 작업을 진행하고 있습니다.
          `,
        },
        {
          title: 'TG-HBV | Hepatitis B',
          desc: 'Liver(간)',
          progress: 80,
          content: `
          <p>
            <span class="color-navy font-bold">바이러스성 질병</span><br>
            바이러스성 질병은 바이러스가 몸에 침투, 세포를 감염시켜 발생하는 질병으로, 바이러스의 종류에 따라 그 분류가 바뀌게 됩니다. 바이러스 종류에는 크게 DNA, RNA 바이러스 2 종류가 있습니다.
            </p>
            <p>
                <span class="color-blue font-bold">툴젠 TG-HBV 프로그램</span><br>
                TG-HBV는 B형 간염(Hepatitis B) 치료제 프로그램입니다. CRISPR/Cas9 유전자가위를 이용해 DNA 바이러스를 절단하면 체내 바이러스를 박멸할 수 있는 가능성이 있습니다. TG-HBV는 CRISPR/Cas9으로 cccDNA를 직접 타겟하여 HBV의 완전한 치료를 가능하게 하는 치료제로 개발되고 있습니다.
                </p>
          `,
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
          content: `
          <p><span class="color-blue font-bold">Engineered immune cell(면역세포)</span><br>
            툴젠의 Next-generation CAR-T는 유전자교정을 통해 DGK 유전자를 제거하여 항암 기능성을 향상시킨 면역세포치료제 플랫폼입니다. DGK 유전자 제거 CAR-T는 향상된 암세포 제거능(Cytotoxicity)싸이토카인 분비를 보입니다. 또한 면역세포 기능을 제어하기 위해 암이 사용하는 주요 신호 중 일부에 대해 저항성을 갖게 됩니다. DGK 유전자 제거 CAR-T는 또한 암 이식 모델(Xenograft model)마우스에서 치료 기능이 향상되는 것을 확인하였습니다. Next-generation CAR-T는 기능향상 CAR-T플랫폼으로 혈액암 및 고형암에 대한 향상된 기능을 할 것으로 기대되어 사업개발적으로는 국내외 CAR-T/ -NK, TCR-T 기업등과의 협력을 도모하고자 합니다.
            </p>
          `,
        },
        {
          title: 'CREAM',
          desc: 'Eye(눈)',
          progress: 70,
          content: `
          <p>
            <span class="color-blue font-bold">Engineered MSC</span><br>
            CREAM(CRispr EnhAnced MSCs)은 체내 병변 환경에서의 생존율과 치료효율을 높인 MSC 치료제 개발 프로젝트입니다. 전 세계적으로 활발히 개발되고 있는 세포 치료제 중 하나인 MSC는 체내 이식 시 낮은 생존율 때문에 치료효과에 대한 논란이 있어 왔습니다. 체내 병변 환경의 특징인 허혈 상태 및 높아진 활성산소에 의해서 MSC의 체내 생존율이 낮아지는 원인이 크다고 알려져 있습니다. 툴젠은 유전자 교정을 이용하여 이런 문제를 극복하고 체내에서 생존율과 치료효율을 높인 MSC 치료제를 개발하고 있습니다. 현재 동물 실험을 통해 치료 전략에 대한 검증 작업을 수행하고 있습니다.
            </p>
          `,
        },
      ]}
    />
  </div>
</Section>
<Section>
  <CardNews title="Related Contents" posts={[1, 1]} />
</Section>
