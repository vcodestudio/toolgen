<script>
  import "$lib/precomp";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { setScreen } from '$lib/screen'
  import { onMount } from 'svelte'
  import Popup from "../components/Popup.svelte"
    import Alert from "../components/Alert.svelte"

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

<!-- <Alert class_="mob">
  모바일 화면은 조정중입니다. 빠른 시일내에 업데이트 하겠습니다. PC화면 이용을 권장합니다.
</Alert> -->