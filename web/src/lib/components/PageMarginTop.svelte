<script>
  import { hHeight } from '$lib/store'
  import { onMount } from 'svelte'

  let height = 136
  onMount(() => {
    height = innerWidth < 1080 ? 56 : 136
    addEventListener('resize', () => {
      height = innerWidth < 1080 ? 56 : 136
    })
  })
</script>

<div class="w-full" style:height={height + 'px'} />
