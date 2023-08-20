<script>
  import Banner from '/src/components/Banner.svelte'
  import DownloadButton from '../../components/DownloadButton.svelte'
  import Section from '../../components/Section.svelte'
  import Overview from '../../components/Overview.svelte'
  import CardPlus from '../../components/CardPlus.svelte'
  import CardNews from '../../components/CardNews.svelte'
  import MobileHeaderW from '../../components/MobileHeaderW.svelte'
  import CardPlusItem from '../../components/CardPlusItem.svelte'
  import { onMount } from 'svelte'

  export let data
  $: posts = data.page
  $: cards = posts.slice(2, 5)
  $: presses = data.original?.presses.data

  onMount(() => {
    console.log('card', cards)
  })
</script>

<MobileHeaderW />
<Banner src="/images/static/f8710dc13167a75c7c4cc9749f255a3a.jpg">
  <h1>{posts[0].title}</h1>
  <p class="max-w-[650px] em:leading-7">
    {posts[0].content.text}
  </p>
  <div class="flex-auto" />
  <div>
    <DownloadButton href="/" title="PDF 다운로드" />
  </div>
</Banner>
<Section>
  <Overview>
    <p>
      {posts[1].content.text}
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
