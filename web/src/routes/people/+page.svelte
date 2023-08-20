<script>
  import { onMount } from 'svelte'
  import BottomBanner from '../../components/BottomBanner.svelte'
  import PageMarginTop from '../../components/PageMarginTop.svelte'
  import Section from '../../components/Section.svelte'
  import Slider from '../../components/Slider.svelte'

  import { popup } from '../../lib/screen'

  export let data
  $: posts = data.page

  let test_sls = [
    'https://stravelte.s3.ap-northeast-2.amazonaws.com/123_3dfe0acd1c.jpg',
    'https://stravelte.s3.ap-northeast-2.amazonaws.com/4324_5f1bded53d.jpg',
    'https://stravelte.s3.ap-northeast-2.amazonaws.com/53252_1fbb2bdb7d.jpg',
    'https://stravelte.s3.ap-northeast-2.amazonaws.com/2312312_e846cc22bf.jpg',
  ]

  let test_ports = [
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_dac082f360.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_826bc4afef.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_1_89b84533a4.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_1_8420371590.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_2_0210ea9d18.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_2_5e91ef303e.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_3_51c9db837d.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_3_a2eebc6575.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_6_841ba51839.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_6_4cac803f69.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_5_b67e042887.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_5_d05e9f9fb2.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_4_f7a632dec4.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_4_f2d00d21a9.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_7_66459086bb.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_7_4d97590a1d.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_8_898ff33c62.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_9_c28e63e47a.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_11_897b689e97.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_8_65126dc886.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_10_2dc41ba74f.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_11_807a40fe9d.jpg',
    ],
    [
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_9_061c680851.png',
      'https://stravelte.s3.ap-northeast-2.amazonaws.com/Rectangle_2329_10_590b002a91.jpg',
    ],
  ]

  onMount(() => {
    console.log('page', posts)
  })
</script>

<PageMarginTop />
<Section>
  <div class="grid gap-8">
    <!-- <h1>People</h1> -->
    <div class="profiles">
      {#each posts[0]?.item ?? [] as item, i}
        <div
          class="flex flex-col overflow-hidden rounded-md item"
          role="button"
          tabindex="0"
          on:click={() => {
            popup.set({ type: 'profile', data: Object.assign(item, { img: test_ports[i][1] }) })
          }}
          on:keydown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              popup.set({ type: 'profile', data: Object.assign(item, { img: test_ports[i][1] }) })
            }
          }}
        >
          <div class="thumb">
            <!-- test_ports -->
            <!-- {item.thumbnail?.data.attributes.url} -->
            <!-- <img class="block object-cover w-full h-full" src={test_ports[i][0]} alt={item.name} /> -->
            <img class="block object-cover w-full h-full" src={item.large?.data.attributes.url} alt={item.name} />
          </div>
          <div class="flex grid flex-col items-start flex-auto gap-0 p-4 py-6 fill-blue desc">
            <div class="flex items-end gap-2">
              <h4 class="text24-500 single-line">{item.name}</h4>
              <p class="text12-400 single-line">{item.job}</p>
            </div>
            <p class="text18-400">{item.eng_name}</p>
            <p class="opacity-80 body14-600 color-light-blue">{item.job_2 ?? ' '}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</Section>
<Section class_="fill-yellow">
  <Slider>
    {#each posts[1]?.item ?? [] as item, i}
      <div class="swiper-slide">
        <div class="flex items-center gap-6 phone:flex-col">
          <div class="thumb relative w-[180px] h-[180px] rounded-full overflow-hidden flex-none">
            <!-- {item.thumb?.data.attributes.url} -->
            <!-- <img class="block object-cover w-full h-full" src={test_sls[i]} alt={item.name} /> -->
            <img class="block object-cover w-full h-full" src={item.thumb?.data.attributes.url} alt={item.name} />
          </div>
          <div class="flex flex-col flex-auto gap-6 phone:gap-2">
            <div class="flex items-center gap-2 phone:justify-center">
              <p class="text18-700">{item.name}</p>
              {#if item.eng_name}
                <p>{item.eng_name}</p>
              {/if}
              {#if item.team}
                <p class="fg-sub">/ {item.team}</p>
              {/if}
            </div>
            <p class="whitespace-pre-wrap">
              {item.interview}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </Slider>
</Section>
<BottomBanner src="/images/static/f3e6aea26fd341871fda94253abad52f.jpg">
  <div class="grid gap-2">
    <h2>Join Us</h2>
    <p>
      툴젠과 함께 혁신적인 미래를 그려갈 분을 찾습니다.<br />
      모집중인 다양한 포지션을 확인해보세요.
    </p>
  </div>
  <div>
    <a href="/career">
      <button class="yellow"> Explore Careers </button>
    </a>
  </div>
</BottomBanner>
