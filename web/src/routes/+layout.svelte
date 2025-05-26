<script>
  import '$lib/precomp'
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import { setScreen } from '$lib/screen'
  import { onMount } from 'svelte'
  import Popup from '$lib/components/Popup.svelte'
  import PopUpBanner from '$lib/components/PopUpBanner.svelte'

  export let data
  onMount(() => {
    setScreen()
    window.addEventListener('resize', setScreen)
    console.log('pop', data.popup)
  })

  $: title = data.original?.title || 'TOOLGEN'
  $: popups = data.popup?.data?.attributes?.popups ?? []
</script>

<svelte:head>
  <title>
    {title}
  </title>
</svelte:head>
<Header />
<main>
  <slot />
</main>
<Popup />
{#if popups.filter(p => p.active).length}
<div class="fixed left-0 px-2 z-[10000] top-1/2 -translate-y-1/2 flex gap-4 max-w-[100vw] overflow-x-auto items-start">
{#each popups.filter(p => p.active) as popup}
  <PopUpBanner data={popup} />
  {/each}
</div>
  {/if}
<Footer meta={data.setting?.data?.attributes?.footer ?? []} />
