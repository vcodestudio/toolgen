<script>
  import isPC from '$lib/screen'
  import { onMount } from 'svelte'
  import Swiper from 'swiper'
  import 'swiper/css'

  export let title = 'Card Posts'
  export let listUrl = '/'
  export let posts = [1, 1, 1, 1, 1]

  let slide

  onMount(() => {
    const slider = new Swiper(slide, {
      slidesPerView: 'auto',
      spaceBetween: 16,
    })

    addEventListener('scroll', e => {
      slider.update()
    })
  })
</script>

<div class="flex flex-col gap-6">
  <div class="flex gap-4">
    <h3>{title}</h3>
    <div class="flex-auto" />
    <a href={listUrl} class="flex items-center">
      <button class="clean">
        <span class=" m:text14-700"> 모두보기 </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3905 7.33309L7.52856 2.47113L8.47137 1.52832L14.9428 7.99972L8.47137 14.4711L7.52856 13.5283L12.3905 8.66642H2V7.33309H12.3905Z"
            fill="black"
          />
        </svg>
      </button>
    </a>
  </div>
  <div class="w-full h-full" bind:this={slide}>
    <div class="items-stretch swiper-wrapper">
      {#each posts as post, idx}
        {#if idx + 1 < 5}
          <a
            href="{listUrl}/{post.id}"
            class=" h-auto swiper-slide news-card m:p-4 m:w-[280px] hover:bg-gray-50 transition-colors"
          >
            <div class="flex flex-col gap-4 m:gap-2">
              <div class="flex items-center gap-4">
                {#if post.type}
                  <p class="text16-700 single-line">
                    {post.type}
                  </p>
                {/if}
                <p class="{$isPC ? 'text16-400' : 'text14-400'} fg-sub single-line">{post?.attributes?.date}</p>
              </div>
              <p class={$isPC ? 'text24-500' : 'text16-500'}>
                {post.attributes.title}
              </p>
            </div>
          </a>
        {:else}
          <a href={listUrl} class="h-auto swiper-slide">
            <div class="flex items-center h-full">
              <div
                class="rounded-full w-[3rem] h-[3rem] border border-gray-200 flex justify-center items-center hover:bg-gray-50 transition-colors"
              >
                <i class="bi bi-three-dots" />
              </div>
            </div>
          </a>
        {/if}
      {/each}
    </div>
  </div>
</div>
