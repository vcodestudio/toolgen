<script>
  import { onMount } from 'svelte'

  export let src = '/dummy/unnamed.png'
  export let link = 'https://www.youtube.com/@ToolGenInc/streams'

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
    class="fixed left-4 z-[10000] bg-white border border-[navy] phone:left-[50%] phone:-translate-x-1/2 phone:w-[calc(100%-2rem)] top-1/2 max-w-[450px] -translate-y-1/2"
    id="popup"
  >
    <div class="flex flex-col gap-2 p-4">
      <p>2023년 10월 13일 금요일 11시부터 오송R&D센터 생중계를 아래의 링크에서 볼 수 있습니다.</p>
      <a href={link} class="block" target="_blank">
        <img class="block w-full h-auto" {src} alt="..." />
      </a>
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
