    <script>
        import { onMount } from "svelte";
        import Swiper from "swiper"
    import "swiper/css";
    export let [navigation, pagination] = [true, true];
    export let color = {
        active:"bg-black opacity-100",
        inactive:"bg-black opacity-30"
    }
            let slider,lBtn,rBtn,sliderObj,pagi;

onMount(()=>{
    sliderObj = new Swiper(slider,{
        loop:true,
        spaceBetween:30,
        on:{
            slideChangeTransitionStart:()=>{
                currentSlide = sliderObj.realIndex;
            }
        }
    });
});

let currentSlide = 0;
    </script>
    <div class="flex flex-col gap-6">
        
    <div class="flex gap-6">
        {#if navigation}
        <button class="clean text40-700 flex-none" on:click={()=>{sliderObj.slidePrev()}}>
            <svg class="block em:w-[1em] em:h-[1em]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7976 26L31 33.6888L29.6012 35L20 26L29.6012 17L31 18.3112L22.7976 26Z" fill="white"/>
            </svg>                
        </button>
        {/if}
        <div class="swiper w-full h-full flex-auto" bind:this={slider}>
            <div class="swiper-wrapper">
                <slot/>
            </div>
        </div>
        {#if navigation}
        <button class="clean text40-700 flex-none" on:click={()=>{sliderObj.slideNext()}}>
            <svg class="block em:w-[1em] em:h-[1em]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2024 26L21 18.3112L22.3988 17L32 26L22.3988 35L21 33.6888L29.2024 26Z" fill="white"/>
            </svg>              
        </button>
        {/if}
    </div>
    {#if pagination && sliderObj}
    <div class="flex justify-center em:gap-2">
        {#each sliderObj.slides as slide,idx}
            <div class=" w-3 h-3 rounded-full transition-all {currentSlide == idx?`w-[1.5rem] ${color.active}`:(color.inactive ?? color.active)}"></div>
        {/each}
    </div>
    {/if}
    </div>