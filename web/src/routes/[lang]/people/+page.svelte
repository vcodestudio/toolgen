<script>
  import { onMount } from 'svelte'
  import BottomBanner from '$lib/components/BottomBanner.svelte'
  import PageMarginTop from '$lib/components/PageMarginTop.svelte'
  import Section from '$lib/components/Section.svelte'
  import Slider from '$lib/components/Slider.svelte'

  import { popup } from '$lib/screen'

  import * as qs from 'qs'

    export let data
  
  $: posts = data.page
  
  onMount(() => {
    // console.log('page', posts)
    window.qs = qs
  })

  function ltn(str) {
    // convert lsep to \n
    return str?.replace(/[\u2028]/g, '<br>')
  }
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
            popup.set({ type: 'profile', data: Object.assign(item, { img: item.detail_image?.data?.attributes?.url }) })
          }}
          on:keydown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              popup.set({
                type: 'profile',
                data: Object.assign(item, { img: item.detail_image?.data?.attributes?.url }),
              })
            }
          }}
        >
          <div class="thumb relative overflow-hidden">
            <!-- test_ports -->
            <img class="block w-full h-auto absolute top-0 left-0" src={item.thumbnail?.data?.attributes.url} alt={item.name} />
            
          </div>
          <div class="flex flex-col items-start justify-start flex-auto gap-0 p-4 py-6 fill-blue desc">
            <div class="flex items-end gap-2">
              {#if item.name}
                <h4 class="text24-500 single-line">{item.name}</h4>
              {/if}
              {#if item.job}
                <p class="text12-400 single-line">{item.job}</p>
              {/if}
            </div>
            {#if item.eng_name}
              <p class="text18-400">{item.eng_name}</p>
            {/if}
            {#if item.job_2}
              <p class="opacity-80 body14-600 color-light-blue">{@html ltn(item.job_2 ?? ' ')}</p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</Section>
<Section class_="fill-yellow">
  <Slider pg_arrow={false}>
    {#each posts[1]?.item ?? [] as item, i}
      <div class="swiper-slide">
        <div class="flex items-center gap-6 phone:flex-col">
          <div class="thumb relative w-[180px] h-[180px] rounded-full overflow-hidden flex-none">
            {#if item.thumb?.data?.attributes?.url}
              <img class="block object-cover w-full h-full" src={item.thumb.data.attributes.url} alt={item.name} />
            {/if}
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
    {@html posts[2]?.content.html}
  </div>
  <div>
    <a href="/career">
      <button class="yellow"> Explore Careers </button>
    </a>
  </div>
</BottomBanner>
