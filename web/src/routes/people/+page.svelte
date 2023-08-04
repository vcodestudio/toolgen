<script>
  import { onMount } from 'svelte'
  import BottomBanner from '../../components/BottomBanner.svelte'
  import PageMarginTop from '../../components/PageMarginTop.svelte'
  import Section from '../../components/Section.svelte'
  import Slider from '../../components/Slider.svelte'

  import { popup } from '../../lib/screen'

  export let data
  $: posts = data.page

  onMount(() => {
    console.log('page', posts)
  })
</script>

<PageMarginTop />
<Section>
  <div class="grid gap-8">
    <h1>People</h1>
    <div class="profiles">
      {#each posts[0]?.item ?? [] as item, i}
        <div
          class="flex flex-col item"
          role="button"
          tabindex="0"
          on:click={() => {
            popup.set({ type: 'profile', data: item })
          }}
          on:keydown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              popup.set({ type: 'profile', data: item })
            }
          }}
        >
          <div class="thumb">
            <img class="block object-cover w-full h-full" src={item.thumbnail?.data.attributes.url} alt={item.name} />
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
          <div class="thumb relative w-[180px] h-[180px] flex-none">
            <img class="block object-cover w-full h-full" src={item.thumb?.data.attributes.url} alt={item.name} />
            <svg class="absolute top-0 left-0 w-full h-full scale-105 color-yellow" viewBox="0 0 357.14 357.14">
              <path
                fill="currentColor"
                d="m0,0v357.14h357.14V0H0Zm302.6,219.43l-83.17,83.17c-45.53,45.53-119.35,45.53-164.89,0h0c-45.53-45.53-45.53-119.35,0-164.89l83.17-83.17c45.53-45.53,119.35-45.53,164.89,0h0c45.53,45.53,45.53,119.35,0,164.89Z"
              />
            </svg>
          </div>
          <div class="flex flex-col flex-auto gap-6 phone:gap-2">
            <div class="flex items-center gap-2 phone:justify-center">
              <p class="text18-700">{item.name}</p>
              {#if item.eng_name}
                <p>{item.eng_name}</p>
              {/if}
              {#if item.team}
                <p class="fg-sub">/ 소속</p>
              {/if}
            </div>
            <p>
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
