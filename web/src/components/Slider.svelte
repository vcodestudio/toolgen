<script>
  import { onMount } from 'svelte'
  import { Swiper } from 'swiper'
  import 'swiper/css'
  //   import 'swiper/swiper-bundle.css'
  export let [navigation, pagination] = [true, true]
  export let color = {
    active: 'bg-black opacity-100',
    inactive: 'bg-black opacity-30',
  }
  export let options = {}
  export let spaceBetween = 0
  let slider, lBtn, rBtn, sliderObj, pagi

  //   Swiper.use([EffectFade])

  onMount(() => {
    console.log(options)
    const config = {
      loop: true,
      spaceBetween,
      on: {
        slideChangeTransitionStart: () => {
          currentSlide = sliderObj.realIndex
        },
      },
    }

    // merge options
    Object.assign(config, options)
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
    {#if pagination && sliderObj}
      <div class="flex items-center justify-center em:gap-2">
        {#each sliderObj.slides as slide, idx}
          <div
            class=" w-3 h-3 rounded-full transition-all {currentSlide == idx
              ? `w-[1.5rem] ${color.active}`
              : color.inactive ?? color.active}"
          />
        {/each}
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
