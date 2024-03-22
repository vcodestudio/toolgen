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
    class="fixed left-4 z-[10000] bg-white border border-[navy] phone:left-[50%] phone:-translate-x-1/2 phone:w-[calc(100%-2rem)] top-1/2 min-w-[350px] max-w-[450px] -translate-y-1/2"
    id="popup"
  >
    <div class="flex flex-col gap-2 p-4">
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
