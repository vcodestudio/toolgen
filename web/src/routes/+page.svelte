<script>
  import { hHeight } from '$lib/store'
  import isPC from '$lib/screen'
  import CardNews from '../components/CardNews.svelte'
  import MobileHeaderW from '../components/MobileHeaderW.svelte'

  const cards = [
    {
      image: '/images/static/fcc4e8b33c5441804c7b7c47262add82.jpg',
      title: 'Platform',
      desc: '유전자 가위 플랫폼 고도화 및 다양한 CRIPSR/Cas9 관련 플랫폼의 연구를 진행하여 유전자교정 업계를 선도합니다.',
    },
    {
      image: '/images/static/f67231e5cb6eb3a15d80cb481e45dd27.jpg',
      title: 'Therapeutics',
      desc: '유전자 가위 플랫폼 고도화 및 다양한 CRIPSR/Cas9 관련 플랫폼의 연구를 진행하여 유전자교정 업계를 선도합니다.',
    },
    {
      image: '/images/static/30b695f77b9c1f6430cdec0aaa2a1117.jpg',
      title: 'Crops',
      desc: '인류가 질병 없는 건강한 삶을 영위할 수 있도록, 유전질환 및 난치질환들의 치료제를 개발하기 위한 연구를 진행합니다.',
    },
  ]
</script>

<MobileHeaderW />
<div
  class="main-banner main-banner-front"
  style="background-image:url(/images/static/373da1004309db1dd448c63a00849184.jpg)"
>
  <div class="w-full" style:height={$hHeight + 'px'} />
  <div class="items-center justify-center w-full cont">
    <div class="banner-content">
      <img class="block w-full h-auto mob" src="/images/static/373da1004309db1dd448c63a00849184.jpg" />
      <h1 class="font-[900] em:leading-5 uppercase pc:text-[76px]">
        Innovate Genome<br />
        Edit Your Life
      </h1>
      <p class="m:-mt-[1rem] leading-[1.5em] text-[20px]">
        툴젠의 CRISPR 유전자가위 원천특허는<br />진핵세포의 유전자교정에 CRISPR 시스템을 <br class="mob" />사용한 세계
        최초의 특허입니다.
      </p>
      <div class="flex justify-center">
        <a href="/crispr">
          <button class="border-none fill hover:bg-navy hover:text-white">CRISPR-Cas9</button>
        </a>
      </div>
    </div>
  </div>
</div>
<section>
  <div class="w-limit section-content">
    <div class="grid grid-cols-1 gap-2">
      <p class="text16-700 color-blue">What We Do</p>
      <h3>For better health, <br class="mob" />happier life</h3>
      <p>
        <b>툴젠(ToolGen)</b>은 세계 최고수준의 유전자교정 전문기업으로 1999년 설립이래 ZFN(Zinc Finger Nuclease)
        유전자가위, TALEN(Transcription Activator Like Effector Nuclease) 유전자가위 개발에 이어, CRISPR 유전자가위를
        개발하여 특허수익화사업, 치료제사업, 종자사업을 영위하고 있습니다.
      </p>
    </div>
    <div class="flex gap-6 m:scroll-x">
      {#each cards as card}
        <div class="card" style="background-image:url({card.image})">
          <div class="text">
            <h4>{card.title}</h4>
            <p class={$isPC ? 'body16-400' : 'body14-400'}>{card.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
<section class="fill-yellow">
  <div class="w-limit section-content">
    <div class="grid gap-3 text-center">
      <p class="text16-700 {$isPC ? '' : 'opacity-50'}">Licensing</p>
      <h3>Stronger Together</h3>
      <p class="text-left">
        진핵세포에 적용 가능한 CRISPR-Cas9 원천 기술의 등록 특허를 보유하고 있는 툴젠은, CRISPR-Cas9 기술을 활용하고자
        하는 파트너와 함께 성장하고자 합니다.툴젠은 유전자 가위 기술 분야에서 1세대 ZFN 부터 2세대 TALEN에 이어 가장
        최신의 3세대 CRISPR-Cas9까지 개발한 유일한 회사입니다. 유전자 교정 기술을 활용하고자 하는 파트너의 미래에 툴젠이
        보유한 기술과 경험이 함께 하겠습니다.
      </p>
    </div>
    <img src="/images/static/rectangle-2297.jpg" alt=".." />
    <div class="pc" />
    <div class="flex justify-center">
      <a href="/licensing-partnership">
        <button class="transition-none hover:bg-navy hover:text-white">
          Licensing 자세히 알아보기
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3905 7.83407L7.52856 2.97211L8.47137 2.0293L14.9428 8.5007L8.47137 14.9721L7.52856 14.0293L12.3905 9.1674H2V7.83407H12.3905Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </a>
    </div>
  </div>
</section>
<section>
  <div class="gap-20 w-limit section-content">
    <CardNews title="Notice" listUrl="/" />
    <CardNews title="News" listUrl="/" />
  </div>
</section>
