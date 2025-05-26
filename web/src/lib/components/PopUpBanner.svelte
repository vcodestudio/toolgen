<script>
  import { onMount } from 'svelte'

  export let data

  $: src = data?.img?.data?.length ? data?.img?.data[0]?.attributes?.url ?? '' : ''
  $: link = data?.link ?? ''
  $: html = data?.html ?? ''
  $: desc = data?.desc ?? ''

  let enabled = false //false

  //   오늘하루그만보기
  function setCookie() {
    var todayDate = new Date()
    var expiredays = 1
    var name = 'popupYN'
    var value = 'N'
    todayDate.setDate(todayDate.getDate() + expiredays)
    document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    closeWin()
  }
  // 닫기
  function closeWin() {
    enabled = false
  }

  onMount(() => {
    if (document.cookie.indexOf('popupYN=N') < 0) {
      enabled = true
    }
  })
</script>

{#if enabled}
  <div
    class=" bg-white border border-[navy] min-w-[350px] max-w-[450px]"
    id="popup"
  >
  <div class="relative">
    <div class="flex flex-col gap-2 p-4 max-h-[500px] overflow-y-auto pb-[8rem]">
      {#if html && html?.length}
        {@html html}
      {:else}
        {#if desc && desc.length}
          <p>{desc}</p>
        {/if}
        {#if src.length}
          <a href={link} class="block" target="_blank">
            <img class="block w-full h-auto" {src} alt="..." />
          </a>
        {/if}
      {/if}

    </div>
    <div class="absolute bottom-0 left-0 w-full h-[8rem] pointer-events-none bg-gradient-to-t from-white to-transparent">

    </div>
  </div>
    <div class="flex gap-0 border-t border-[navy] h-[3em]">
      <a class="justify-center flex-1 button clean" href="#" on:click|preventDefault={setCookie}>
        <p class="w-full text-center">오늘하루 그만보기</p>
      </a>
      <a class="justify-center flex-1 button clean navy" href="#" on:click|preventDefault={closeWin}>
        <p class="w-full text-center">닫기</p>
      </a>
    </div>
  </div>
{/if}
