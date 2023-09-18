<script>
  import { onMount } from 'svelte'
  import DownloadButton from '$lib/components/DownloadButton.svelte'
  import MobileHeaderW from '$lib/components/MobileHeaderW.svelte'
  import Section from '$lib/components/Section.svelte'
  import SectionImg from '$lib/components/SectionImg.svelte'
  import Banner from '$lib/components/Banner.svelte'
  import Slider from '$lib/components/Slider.svelte'
  import { page } from '$app/stores'
  import { __t } from '$lib/utils'

  export let data
  $: posts = data.page
  onMount(() => {
    // console.log(posts)
  })

  $: histories = posts.find(a => a.__component == 'page-item.history')?.history
  let histories_ = [
    { year: '1999', month: '1월', content: '㈜툴젠 설립 (본점소재지: 서울특별시 동작구 사당4동 267-30)' },
    { year: '2002', month: '6월', content: '아시아의 주목할 만한 10개 생명과학회사로 선정 / Pacific Forum' },
    { year: '2003', month: '3월', content: 'ZFP(Zinc Finger Proteins) 논문 발표 / Nature Biotechnology' },
    {
      year: '2004',
      month: '6월',
      content: '연구소장(김진수 박사) 이달의 과학기술자상 수상 / 과학기술부, 한국과학재단',
    },
    { year: '2005', month: '3월', content: '8대 세계적인 연구성과로 선정 / 과학기술부' },
    { year: '2009', month: '5월', content: '유전자가위 기술(AIDS 치료제) 논문 발표 / Genome Research' },
    { year: '2010', month: '1월', content: '유전자가위 기술(유전체 결실) 논문 발표 / Genome Research' },
    { year: '2011', month: '1월', content: '유전자가위 대량생산기술 논문 발표 / Nature Methods' },
    { year: '2012', month: '1월', content: 'CRISPR 유전자가위 원천기술 관련 특허 가출원 / 미국 특허청' },
    {
      year: '2013',
      month: '3월',
      content:
        'Human Genome TALEN Library 논문 발표 / Nature Biotechnology <br> CRISPR 유전자가위 기술 관련 License-out / Life Technologies (미국)',
    },
    { year: '2013', month: '7월', content: 'CRISPR 유전자가위 기술 관련 License-out / KeyGene (네덜란드)' },
    { year: '2014', month: '6월', content: '코넥스시장 상장 / 한국거래소' },
    {
      year: '2014',
      month: '11월',
      content: 'CRISPR 유전자가위 기술 관련 License-out / Thermo Fisher Scientific (미국)',
    },
    { year: '2016', month: '8월', content: 'CRISPR 유전자가위 원천기술 관련 호주 특허 등록 승인 / 호주 특허청' },
    { year: '2017', month: '8월', content: 'CRISPR 유전자가위 기술 관련 License-out / Monsanto (現 Bayer)' },
    { year: '2017', month: '11월', content: '유전자가위 리포터 기술 관련 미국 특허 등록 / 미국 특허청' },
    { year: '2018', month: '6월', content: '향상된 기능의 CAR-T 치료제(Styx-T) 연구성과 논문 게재 / Cancer Research' },
    { year: '2018', month: '7월', content: 'CRISPR 유전자가위 원천기술 관련 유럽 특허 등록 / 유럽 특허청' },
    {
      year: '2018',
      month: '6월',
      content: '특이성이 향상된 CRISPR 유전자가위(Sniper Cas9) 연구성과 논문 게재 / Nature Communications',
    },
    { year: '2018', month: '8월', content: 'CRISPR 유전자가위 원천기술 관련 싱가포르 특허 등록 / 싱가포르 특허청' },
    { year: '2018', month: '11월', content: 'CRISPR 유전자가위 원천기술 관련 일본 특허 등록 / 일본 특허청' },
    {
      year: '2019',
      month: '4월',
      content: '유전자교정 기술을 적용한 샤르코-마리-투스병(CMT 1A) 연구성과 논문 게재 / Nucleic Acids Research',
    },
    {
      year: '2019',
      month: '11월',
      content: 'Campylobacter jejuni(C.jejuni) 유래 CRISPR-Cas9 미국 특허 등록 / 미국 특허청',
    },
    { year: '2020', month: '1월', content: 'CRISPR 유전자가위 원천기술 관련 미국 특허 등록 /  미국 특허청' },
    {
      year: '2020',
      month: '4월',
      content:
        '충남대학교와 공동개발한 유전자가위 페튜니아(Petunia), 미국 농무부로부터 Non-GMO(Am I Regulated?) 승인 / 미국 농무부(USDA)',
    },
    {
      year: '2020',
      month: '7월',
      content: '유전자교정 高 올레산 함량 콩, 미국 농무부로부터 Non-GMO(Am I Regulated?) 승인 / 미국 농무부(USDA)',
    },
    { year: '2020', month: '8월', content: 'CRISPR 유전자가위 원천기술 관련 홍콩 특허 등록 / 홍콩 특허청' },
    { year: '2020', month: '11월', content: 'Campylobacter jejuni(C.jejuni) 유래 CRISPR-Cas9 호주 특허 등록' },
    { year: '2020', month: '12월', content: 'CRISPR-Cas9 유전자가위 기술 특허 저촉심사 개시 / 미국 특허심판원(PTAB)' },
    { year: '2021', month: '1월', content: 'CRISPR 유전자가위 원천기술 관련 인도 특허 등록 / 인도 특허청' },
    { year: '2021', month: '12월', content: '코스닥시장 상장 / 한국거래소' },
    {
      year: '2022',
      month: '9월',
      content: 'CRISPR-Cas9 유전자가위 기술 특허 저촉심사 Motion Phase 승리(Senior Party의 지위 확정) / 인도 특허청',
    },
    { year: '2022', month: '9월', content: '유전자 교정 신품종 갈변억제 감자 GMO규제 면제승인 / 미국 농무부(USDA)' },
  ]
</script>

<MobileHeaderW />
{#if posts}
  <Banner src={posts[0]?.imgUrl} />
  <Section class_="m:pb-0">
    <div class="relative w-full h-0">
      <div
        class="
        bg-[#001B71] bg-opacity-90 bg-blend-multiply text-white absolute top-0 left-0 rounded-md p-8 translate-y-[-70%]
        m:p-4 m:-translate-y-[100%]
        "
      >
        <h1 class="m:text24">
          Innovate Genome<br />
          Edit Your Life
        </h1>
      </div>
    </div>
  </Section>
  <Section>
    <div class="flex flex-col gap-4">
      <p class="text16-700 color-mint">About Us</p>
      <h3 class="color-navy">{posts[1]?.title}</h3>
      {@html posts[1]?.content.html}
      <SectionImg src={posts[1]?.imgUrl} />
      <div class="flex justify-end m:justify-center">
        <!-- <DownloadButton title={__t('common.3', $page.params.lang)} /> -->
      </div>
    </div>
  </Section>

  <Section>
    <div class="flex flex-col gap-4">
      <p class="text16-700 color-mint">ToolGen History</p>
      <Slider
        navigation={false}
        color={{
          active: 'fill-mint',
          inactive: 'fill-navy',
        }}
        paginationPos="top"
      >
        <div class="swiper-slide">
          <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
            <div class="flex flex-col gap-4">
              <h3 class="color-navy">
                {posts[2]?.item[0].year}<br />
                {posts[2]?.item[0]?.title}
              </h3>
              <p class="whitespace-pre-wrap">
                {posts[2]?.item[0].desc}
              </p>
            </div>
            <div>
              <!-- {posts[2]?.item[0]?.img?.data.attributes.formats.large.url} -->
              <img
                class="block w-full h-auto"
                src="https://stravelte.s3.ap-northeast-2.amazonaws.com/sl_89c86cf342.jpg"
              />
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
            <div class="flex flex-col gap-4">
              <h3 class="color-navy">
                {posts[2]?.item[1].year}<br />
                {posts[2]?.item[1]?.title}
              </h3>
              <p class="whitespace-pre-wrap">
                {posts[2]?.item[1].desc}
              </p>
            </div>
            <div>
              <!-- {posts[2]?.item[1]?.img?.data.attributes.formats.large.url} -->
              <img
                class="block w-full h-auto"
                src="https://stravelte.s3.ap-northeast-2.amazonaws.com/s2_903faa2a39.jpg"
              />
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
            <div class="flex flex-col gap-4">
              <h3 class="color-navy">
                {posts[2]?.item[2].year}<br />
                {posts[2]?.item[2]?.title}
              </h3>
              <p class="whitespace-pre-wrap">
                {posts[2]?.item[2].desc}
              </p>
            </div>
            <div>
              <!-- {posts[2]?.item[2]?.img?.data.attributes.formats.large.url} -->
              <img
                class="block w-full h-auto"
                src="https://stravelte.s3.ap-northeast-2.amazonaws.com/s3_9f832d97bb.jpg"
              />
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
            <div class="flex flex-col gap-4">
              <h3 class="color-navy">
                {posts[2]?.item[3].year}<br />
                {posts[2]?.item[3]?.title}
              </h3>
              <p class="whitespace-pre-wrap">
                {posts[2]?.item[3].desc}
              </p>
            </div>
            <div class="flex items-center justify-center">
              <!-- {posts[2]?.item[3]?.img?.data.attributes.formats.large.url} -->
              <img
                class="block w-full h-auto"
                src="https://stravelte.s3.ap-northeast-2.amazonaws.com/s4_e0a17879ff.jpg"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </Section>
  <Section class_="fill-bluegray overflow-hidden m:pb-0">
    <div class="flex gap-20 m:flex-col m:flex-col-reverse m:gap-4 m:items-center">
      <img src="/images/about/2.png" class="block translate-y-20 m:w-[170px] m:translate-y-0" />
      <div class="flex flex-col gap-6 m:gap-2">
        <div class="flex flex-col gap-0">
          <p class="text16-700 color-mint">Founder</p>
          <h3 class="color-navy">{posts[3]?.title}</h3>
        </div>
        <p>
          {posts[3]?.content.text}
        </p>
      </div>
    </div>
  </Section>
  <Section class_="fill-navy text-white relative overflow-hidden">
    <div class="grid grid-cols-[1fr,2fr] gap-20 relative phone:grid-cols-1 phone:gap-2">
      <div>
        <h3>History</h3>
      </div>
      <div class="relative">
        <div class="grid gap-8 m:gap-2 pc:max-h-[450px] overflow-auto">
          {#each histories as item, i}
            <div class="flex items-start gap-4">
              <p class="text16-700 flex-[1]">
                {#if histories[i - 1]?.year !== item?.year}
                  {item.year}
                {/if}
              </p>
              <p class="fg-sub flex-[1]">{item.month}</p>
              <p class="flex-[10]">
                {@html item.content}
              </p>
            </div>
          {/each}
          <div class="pc">
            <br />
            <br />
            <br />
          </div>
        </div>
        <div class="pc gradient-navy absolute -bottom-[1px] left-0 h-[100px] w-full pointer-events-none" />
      </div>
    </div>
  </Section>
  <Section>
    <div class="flex flex-col gap-4 m:gap-2">
      <p class="text16-700 color-mint">ToolGen Location</p>
      <div class="grid grid-cols-2 gap-8 phone:grid-cols-1 m:gap-4">
        <div class="flex flex-col gap-4 m:gap-2">
          <h3 class="color-navy">{posts[5]?.title}</h3>
          <div class="flex flex-col gap-0">
            {@html posts[5]?.content.html}
          </div>
        </div>
        <div class="flex flex-col gap-4 m:gap-2">
          <h3 class="color-navy">{posts[6]?.title}</h3>
          <div class="flex flex-col gap-0">
            {@html posts[6]?.content.html}
          </div>
        </div>
      </div>
    </div>
  </Section>
{/if}
