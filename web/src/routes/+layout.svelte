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
    console.log(data)
  })

  $: title = data.original?.title || 'TOOLGEN'
  $: popup = data.popup?.data?.attributes ?? false
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
{#if popup && popup.active}
  <PopUpBanner data={popup} />
{/if}
<Footer meta={data.setting.data.attributes.footer} />
