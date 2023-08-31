<script>
  import { hHeight } from '$lib/store'
  export let src = ''
</script>

<div class="fill-navy main-banner relative" style="background-image:url({src})">
  <div class="absolute w-2/3 top-0 left-0 h-full bg-gradient-to-r from-[rgba(0,0,0,0.45)] to-transparent" />
  <div class="w-full" style:height={$hHeight + 'px'} />
  <div class="w-full cont justify-center items-center">
    <div class="relative py-20 w-limit text-white self-stretch flex flex-col gap-6">
      <slot />
    </div>
  </div>
</div>
