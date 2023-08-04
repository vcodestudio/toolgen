<script>
  import Section from '../../../components/Section.svelte'
  import DownloadButton from '../../../components/DownloadButton.svelte'

  export let data
  $: posts = data.page

  let detailOpen = false
</script>

<Section>
  <div class="grid gap-20">
    <div class="flex flex-col gap-6">
      <h2>{posts[0].title}</h2>
      {@html posts[0].content.html}
      <DownloadButton title="PDF 다운로드" />
      <img class="block" src={posts[0].imgUrl} alt=".." />
    </div>
  </div></Section
>
<hr class="w-limit" />
<Section>
  <div class="flex flex-col gap-8">
    <h3>Benefit of CRISPR</h3>
    <div class="grid grid-cols-2 gap-8 m:grid-cols-1">
      <div class="grid gap-2">
        <div class="w-4 border-t-2 border-emerald-400" />
        <p class="text18-700">{posts[1].title}</p>
        <p class="text16-400">
          {posts[1].content.text}
        </p>
      </div>
      <div class="grid gap-2">
        <div class="w-4 border-t-2 border-emerald-400" />
        <p class="text18-700">{posts[2].title}</p>
        <p class="text16-400">
          {posts[2].content.text}
        </p>
      </div>
    </div>
    <hr />
    <p>
      {posts[3].content.text}
    </p>
    <hr />
    <div class="flex justify-center">
      <img class="block max-w-[650px]" src={posts[3].imgUrl} alt=".." />
    </div>
  </div>
</Section>
<hr class="w-limit" />
<Section>
  <div class="grid gap-6">
    <h3 class="m:text24-700">{posts[4].title}</h3>
    {@html posts[4].content.html}
    {#if detailOpen}
      {@html posts[5].content.html}
      <img class="block w-full" src={posts[5].imgUrl} alt=".." />
      {@html posts[6].content.html}
    {/if}
    <div class="flex justify-center">
      <button
        on:click={e => {
          detailOpen = !detailOpen
        }}
      >
        {#if detailOpen}
          접기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 5.8657L2.87413 11.334L2 10.4015L8 4.00065L14 10.4015L13.1259 11.334L8 5.8657Z"
              fill="black"
            />
          </svg>
        {:else}
          펼쳐보기
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.5 10.1343L13.6259 4.66602L14.5 5.59854L8.5 11.9993L2.5 5.59854L3.37413 4.66602L8.5 10.1343Z"
              fill="black"
            />
          </svg>
        {/if}
      </button>
    </div>
  </div>
</Section>
