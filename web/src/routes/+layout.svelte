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
  })

  $: title = data.original?.title || 'TOOLGEN'
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
<PopUpBanner />
<Footer meta={data.setting.data.attributes.footer} />
