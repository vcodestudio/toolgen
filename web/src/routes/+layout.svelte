<script>
  import "$lib/precomp";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { setScreen } from '$lib/screen'
  import { onMount } from 'svelte'
  import Popup from "../components/Popup.svelte"

  onMount(() => {
    setScreen()
    window.addEventListener('resize', setScreen)
  })

  export let data;
</script>

<Header/>
  <main>
    <slot/>
  </main>
<Popup/>
<Footer/>