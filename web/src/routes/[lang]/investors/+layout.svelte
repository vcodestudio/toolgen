<script>
  import PageMarginTop from '$lib/components/PageMarginTop.svelte'
  import Section from '$lib/components/Section.svelte'
  import SubMenus from '$lib/components/SubMenus.svelte'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import { __t } from '$lib/utils'
  import { __e } from '$lib/utils'

  let lang = $page.params.lang

  let menus = [
    { selected: false, title: 'Notice', name: __e(lang, '공지사항'), link: '/investors/notice', lang: 'ko' },
    { selected: false, title: 'Stock Information', name: __e(lang, '주가정보'), link: '/investors/stock' },
    { selected: false, title: 'Filings', name: __e(lang, '공시자료'), link: '/investors/filings' },
    { selected: false, title: 'Financials', name: __e(lang, '재무제표'), link: '/investors/finance' },
    { selected: false, title: 'News', name: __e(lang, '뉴스'), link: '/investors/news', lang: 'ko' },
  ]

  menus = menus
    .filter(a => a.lang === $page.params.lang || a.lang === undefined)
    .map(a => {
      a.link = `/${$page.params.lang}${a.link}`
      return a
    })

  $: currentPage = menus.find(a => $page.data.pathname.includes(a.link))
</script>

<svelte:head>
  <title>{currentPage?.title}</title>
</svelte:head>
<PageMarginTop />
<Section>
  <div class="grid gap-[2rem] p:gap-[2rem]">
    <SubMenus {menus} />
    <div>
      <h1>{currentPage?.title}</h1>
      <p class="fg-sub text24-500">{currentPage?.name}</p>
    </div>
  </div>
</Section>
<slot />
