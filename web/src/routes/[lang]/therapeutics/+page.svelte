<script>
  import Banner from '$lib/components/Banner.svelte'
  import DownloadButton from '$lib/components/DownloadButton.svelte'
  import Section from '$lib/components/Section.svelte'
  import Overview from '$lib/components/Overview.svelte'
  import CardNews from '$lib/components/CardNews.svelte'
  import SectionImg from '$lib/components/SectionImg.svelte'
  import Pipline from '$lib/components/Pipline.svelte'
  import MobileHeaderW from '$lib/components/MobileHeaderW.svelte'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { __t } from '$lib/utils'
  export let data
  $: posts = data.page
  $: presses = data.original?.presses.data

  $: pipeitem = posts.find(a => a.__component == 'page-item.pipeline')
  $: categories = [...new Set(pipeitem?.item.map(a => a.category))] ?? []

  onMount(() => {
    // console.log('pip', posts, categories)
  })
</script>

<MobileHeaderW />
<Banner src="/images/static/3c32a138f0fbf242c0ea9be52d81b175.jpg">
  <h1>Therapeutics</h1>
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
    {@html posts[1]?.content.html}
    <SectionImg src="/images/thera/1.png" />
  </Overview>
</Section>
<Section class_="fill-sub">
  <div class="grid gap-20 gap m:gap-4">
    <div class="flex gap-20 m:flex-col m:gap-4">
      <div class="flex items-center leading-[1em]">
        <h3 class="flex-auto">Pipeline</h3>
        <div class="flex-none h-[20px] mob">
          <svg class="w-auto h-full" viewBox="0 0 53 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.19336 5.46995L7.72861 11.0002L2.19336 16.5304L3.1373 17.4735L9.14453 11.4717C9.40519 11.2113 9.40519 10.7891 9.14453 10.5286L3.1373 4.52686L2.19336 5.46995ZM6.86003 5.46995L12.3953 11.0002L6.86003 16.5304L7.80397 17.4735L13.8112 11.4717C14.0719 11.2113 14.0719 10.7891 13.8112 10.5286L7.80397 4.52686L6.86003 5.46995Z"
              fill="#337DD9"
            />
            <path
              d="M25.068 11.012C24.914 10.396 24.438 9.99 23.556 9.976C22.646 9.99 22.002 10.48 21.988 11.096C22.002 11.586 22.394 11.922 23.276 12.132L24.368 12.412C25.698 12.734 26.356 13.392 26.356 14.428C26.356 15.702 25.306 16.654 23.444 16.668C21.778 16.654 20.784 15.912 20.588 14.568H21.82C21.96 15.282 22.478 15.632 23.416 15.632C24.48 15.632 25.138 15.184 25.152 14.484C25.138 13.966 24.76 13.616 23.92 13.42L22.8 13.168C21.512 12.86 20.826 12.16 20.812 11.152C20.826 9.892 21.932 8.982 23.556 8.968C25.11 8.982 26.076 9.794 26.216 11.012H25.068ZM30.7213 16.668C28.6213 16.654 27.3333 15.044 27.3333 12.832C27.3333 10.564 28.6773 8.982 30.6933 8.968C32.2753 8.982 33.4653 9.92 33.6613 11.32H32.4853C32.3033 10.634 31.7153 10.018 30.7213 10.032C29.3913 10.018 28.5093 11.11 28.5093 12.776C28.5093 14.498 29.3773 15.604 30.7213 15.604C31.6033 15.604 32.2613 15.128 32.4853 14.316H33.6613C33.4653 15.646 32.3733 16.654 30.7213 16.668ZM34.8931 16.5V9.08H36.0411V10.2H36.1251C36.3911 9.458 37.1751 8.954 38.0571 8.968C38.2251 8.954 38.5191 8.968 38.6451 8.968V10.172C38.5751 10.144 38.2531 10.088 37.9451 10.088C36.8811 10.088 36.0831 10.83 36.0971 11.824V16.5H34.8931ZM42.4072 16.668C40.3912 16.654 39.0192 15.128 39.0192 12.832C39.0192 10.508 40.3912 8.982 42.4072 8.968C44.4233 8.982 45.7813 10.508 45.7673 12.832C45.7813 15.128 44.4233 16.654 42.4072 16.668ZM40.1952 12.832C40.1952 14.302 40.8952 15.604 42.4072 15.604C43.9053 15.604 44.6052 14.302 44.5913 12.832C44.6052 11.348 43.9053 10.018 42.4072 10.032C40.8952 10.018 40.1952 11.348 40.1952 12.832ZM48.2889 6.588V16.5H47.0849V6.588H48.2889ZM51.1378 6.588V16.5H49.9338V6.588H51.1378Z"
              fill="#337DD9"
            />
          </svg>
        </div>
      </div>
    </div>
    {#each categories as category}
      <Pipline
        title={category}
        progress={pipeitem?.progress?.split(',')}
        items={posts.find(a => a.__component == 'page-item.pipeline')?.item.filter(a => a.category == category)}
      />
    {/each}
  </div>
</Section>
<Section>
  <CardNews title="News" posts={presses} listUrl="/investors/news" />
</Section>
