<script>
  import Banner from '$lib/components/Banner.svelte'
  import DownloadButton from '$lib/components/DownloadButton.svelte'
  import Section from '$lib/components/Section.svelte'
  import Overview from '$lib/components/Overview.svelte'
  import CardNews from '$lib/components/CardNews.svelte'
  import MobileHeaderW from '$lib/components/MobileHeaderW.svelte'
  import CardPlusItem from '$lib/components/CardPlusItem.svelte'
  import { page } from '$app/stores'
  import { __t } from '$lib/utils'

  export let data
  $: posts = data.page
  $: cards = posts.slice(2, 5)
  $: presses = data.original?.presses.data
</script>

<MobileHeaderW />
<Banner src="/images/static/f8710dc13167a75c7c4cc9749f255a3a.jpg">
  <h1>{posts[0]?.title}</h1>
  <p class="max-w-[650px] em:leading-7">
    {posts[0]?.content.text}
  </p>
  <div class="flex-auto" />
  <div>
    <!-- <DownloadButton href="/" title={__t('common.1', $page.params.lang)} /> -->
  </div>
</Banner>
<Section>
  <Overview>
    <p>
      {posts[1]?.content.text}
    </p>
    <div class="grid gap-6">
      {#each cards as card}
        <CardPlusItem {card} />
      {/each}
    </div>
  </Overview>
</Section>
<Section>
  <CardNews title="Related Contents" posts={presses} listUrl="/investors/news" />
</Section>
