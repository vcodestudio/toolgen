<script>
  import { onMount } from 'svelte'
  import Section from '$lib/components/Section.svelte'
  import { page } from '$app/stores'
  import { __e } from '$lib/utils'

  let lang = $page.params.lang

  export let data
  $: post = data?.post.data[0].attributes
  onMount(() => {
    // console.log('page2', data)
  })
</script>

<Section>
  <div class="grid gap-8">
    <div class="grid gap-4">
      <div class="flex flex-col gap-0">
        <!-- <p class="color-blue text16-700">카테고리</p> -->
        <h3>{post?.title}</h3>
      </div>
      <div class="flex items-center gap-4 single-line fg-sub">
        <p class="body16-500 color-navy">주식회사 툴젠</p>
        <span>|</span>
        <p>{post?.date}</p>
      </div>
    </div>
    <div class="flex flex-col gap-6 detail-content">
      {@html post?.body}
    </div>
    <hr />
    <div class="flex">
      <a href="/{lang}/investors/notice">
        <button class="square navy"> {__e(lang, '목록으로')} </button>
      </a>
    </div>
  </div>
</Section>
