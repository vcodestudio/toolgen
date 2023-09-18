<script>
  import { onMount } from 'svelte'
  import { Swiper } from 'swiper'
  import 'swiper/css'
  //   import 'swiper/swiper-bundle.css'
  export let [navigation, pagination, pg_arrow] = [true, true, true]
  export let paginationPos = 'bottom'
  export let color = {
    active: 'bg-black opacity-100',
    inactive: 'bg-black opacity-30',
  }
  export let options = {}
  export let spaceBetween = 0
  let slider, lBtn, rBtn, sliderObj, pagi

  //   Swiper.use([EffectFade])

  onMount(() => {
    // console.log(options)
    let config = {
      loop: true,
      spaceBetween,
      on: {
        slideChangeTransitionStart: () => {
          currentSlide = sliderObj.realIndex
        },
      },
    }

    // merge options
    config = Object.assign(config, options)
    // const config = {
    //   loop: true,
    //   spaceBetween,
    //   on: {
    //     slideChangeTransitionStart: () => {
    //       currentSlide = sliderObj.realIndex
    //     },
    //   },
    //   fadeEffect: { crossFade: true },
    //   virtualTranslate: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: true,
    //   },
    //   speed: 1000,
    //   slidersPerView: 1,
    //   effect: 'fade',
    // }
    console.log(config)
    sliderObj = new Swiper(slider, config)
  })

  let currentSlide = 0
</script>

{#if pagination && sliderObj && paginationPos == 'top'}
  <div class="flex items-center justify-start em:gap-2">
    {#each sliderObj.slides as slide, idx}
      <div
        class=" w-3 h-3 rounded-full transition-all {currentSlide == idx
          ? `w-[1.5rem] ${color.active}`
          : color.inactive ?? color.active}"
      />
    {/each}
    {#if pg_arrow}
      <div
        on:click={() => {
          sliderObj.slideNext()
        }}
        class="cursor-pointer"
      >
        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.75 4.70096C10.75 5.27831 10.75 6.72169 9.75 7.29904L2.25 11.6292C1.25 12.2065 -5.89441e-07 11.4848 -5.38967e-07 10.3301L-1.60415e-07 1.66987C-1.09942e-07 0.515171 1.25 -0.206516 2.25 0.370835L9.75 4.70096Z"
            fill="#2A7DE1"
          />
        </svg>
      </div>
    {/if}
  </div>
{/if}
<div class="flex flex-col gap-6">
  <div class="flex gap-6">
    {#if navigation}
      <button
        class="flex-none clean text40-700 pc"
        on:click={() => {
          sliderObj.slidePrev()
        }}
      >
        <svg class="block em:w-[1em] em:h-[1em]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="26" fill="black" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.7976 26L31 33.6888L29.6012 35L20 26L29.6012 17L31 18.3112L22.7976 26Z"
            fill="white"
          />
        </svg>
      </button>
    {/if}
    <div class="flex-auto w-full h-full swiper" bind:this={slider}>
      <div class="swiper-wrapper">
        <slot />
      </div>
    </div>
    {#if navigation}
      <button
        class="flex-none clean text40-700 pc"
        on:click={() => {
          sliderObj.slideNext()
        }}
      >
        <svg class="block em:w-[1em] em:h-[1em]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="26" fill="black" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.2024 26L21 18.3112L22.3988 17L32 26L22.3988 35L21 33.6888L29.2024 26Z"
            fill="white"
          />
        </svg>
      </button>
    {/if}
  </div>
  <div class="flex items-center justify-center em:gap-6">
    {#if navigation}
      <button
        class="flex-none clean text40-700 mob"
        on:click={() => {
          sliderObj.slideNext()
        }}
      >
        <svg class="block em:w-[1.2em] em:h-[1.2em]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="26" fill="black" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.7976 26L31 33.6888L29.6012 35L20 26L29.6012 17L31 18.3112L22.7976 26Z"
            fill="white"
          />
        </svg>
      </button>
    {/if}
    {#if pagination && sliderObj && paginationPos == 'bottom'}
      <div class="flex items-center justify-center em:gap-2">
        {#if pg_arrow}
          <div
            on:click={() => {
              sliderObj.slidePrev()
            }}
            class="cursor-pointer"
          >
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.25 7.29904C0.249999 6.72169 0.25 5.27831 1.25 4.70096L8.75 0.370834C9.75 -0.206516 11 0.515172 11 1.66987L11 10.3301C11 11.4848 9.75 12.2065 8.75 11.6292L1.25 7.29904Z"
                fill="#2A7DE1"
              />
            </svg>
          </div>
        {/if}
        {#each sliderObj.slides as slide, idx}
          <div
            class=" w-3 h-3 rounded-full transition-all {currentSlide == idx
              ? `w-[1.5rem] ${color.active}`
              : color.inactive ?? color.active}"
          />
        {/each}
        {#if pg_arrow}
          <div
            on:click={() => {
              sliderObj.slideNext()
            }}
            class="cursor-pointer"
          >
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.75 4.70096C10.75 5.27831 10.75 6.72169 9.75 7.29904L2.25 11.6292C1.25 12.2065 -5.89441e-07 11.4848 -5.38967e-07 10.3301L-1.60415e-07 1.66987C-1.09942e-07 0.515171 1.25 -0.206516 2.25 0.370835L9.75 4.70096Z"
                fill="#2A7DE1"
              />
            </svg>
          </div>
        {/if}
      </div>
    {/if}
    {#if navigation}
      <button
        class="flex-none clean text40-700 mob"
        on:click={() => {
          sliderObj.slideNext()
        }}
      >
        <svg class="block em:w-[1.2em] em:h-[1.2em]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="26" fill="black" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.2024 26L21 18.3112L22.3988 17L32 26L22.3988 35L21 33.6888L29.2024 26Z"
            fill="white"
          />
        </svg>
      </button>
    {/if}
  </div>
</div>
