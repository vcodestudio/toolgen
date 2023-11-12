<script>
  import { hHeight } from '$lib/store'
  import isPC from '$lib/screen'
  import CardNews from '$lib/components/CardNews.svelte'
  import MobileHeaderW from '$lib/components/MobileHeaderW.svelte'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { __t, LoadPost } from '$lib/utils'

  export let data
  let cont
  let lang = $page.params.lang
  $: cont = data.page ?? []

  let cards = [
    {
      link: `/platform`,
      image: '/images/static/fcc4e8b33c5441804c7b7c47262add82.jpg',
    },
    {
      link: `/therapeutics`,
      image: '/images/static/f67231e5cb6eb3a15d80cb481e45dd27.jpg',
    },
    {
      link: `/crops`,
      image: '/images/static/30b695f77b9c1f6430cdec0aaa2a1117.jpg',
    },
  ]

  cards = cards.map(a => {
    a.link = `/${lang}${a.link}`
    return a
  })

  onMount(async () => {
    const req = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'main' }),
    })
    const res = await req.json()

    data = Object.assign(data, res)
    console.log('data', data)
  })
</script>

<MobileHeaderW />
<div
  class="main-banner main-banner-front"
  style="background-image:url(/images/static/373da1004309db1dd448c63a00849184.jpg)"
>
  <div class="w-full" style:height={$hHeight + 'px'} />
  <div class="items-center justify-center w-full cont">
    <div class="bg-white banner-content bg-opacity-40">
      <img class="block w-full h-auto mob" src="/images/static/373da1004309db1dd448c63a00849184.jpg" />
      <h1 class="font-[900] em:leading-5 uppercase pc:text-[76px]">
        Innovate Genome<br />
        Edit Your Life
      </h1>
      <div class="m:-mt-[1rem] leading-[1.5em] text-[20px]">
        {@html cont[0]?.content.html}
      </div>

      <div class="flex justify-center">
        <a href="/{lang}/crispr/cas9">
          <button class="border-none fill hover:bg-navy hover:text-white">CRISPR-Cas9</button>
        </a>
      </div>
    </div>
  </div>
</div>
<section>
  <div class="w-limit section-content">
    <div class="grid grid-cols-1 gap-2">
      <p class="text16-700 color-blue">What We Do</p>
      <h3>For better health, <br class="mob" />happier life</h3>
      {@html cont[1]?.content.html}
    </div>
    <div class="grid grid-cols-3 gap-6 m:flex m:scroll-x">
      {#each cards as card, i}
        <a href={card.link} class="card" style="background-image:url({card.image})">
          <div class="text">
            <h4>{cont[i + 2]?.title}</h4>
            <p class={$isPC ? 'body16-400' : 'body14-400'}>{cont[i + 2]?.content.text}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
<section class="fill-yellow">
  <div class="w-limit section-content">
    <div class="grid gap-3 text-center">
      <p class="text16-700 {$isPC ? '' : 'opacity-50'}">Licensing</p>
      <h3>Stronger Together</h3>
      <p class="text-left">
        {@html cont[5]?.content.text}
      </p>
    </div>
    <img src="/images/static/rectangle-2297.jpg" alt=".." />
    <div class="pc" />
    <div class="flex justify-center">
      <a href="/{lang}/licensing-partnership">
        <button class="transition-none hover:bg-navy hover:text-white">
          {__t('main.1', $page.params.lang)}
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3905 7.83407L7.52856 2.97211L8.47137 2.0293L14.9428 8.5007L8.47137 14.9721L7.52856 14.0293L12.3905 9.1674H2V7.83407H12.3905Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </a>
    </div>
  </div>
</section>
{#if data.notice && data.press}
  <section>
    <div class="gap-20 w-limit section-content">
      <CardNews title="Notice" listUrl={`/${lang}/investors/notice`} posts={data.notice.data} />
      <CardNews title="News" listUrl={`/${lang}/investors/news`} posts={data.press.data} />
    </div>
  </section>
{/if}
