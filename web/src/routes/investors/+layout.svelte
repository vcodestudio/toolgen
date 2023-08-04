<script>
  import PageMarginTop from '../../components/PageMarginTop.svelte'
  import Section from '../../components/Section.svelte'
  import SubMenus from '../../components/SubMenus.svelte'
  import { page } from '$app/stores'

  let menus = [
    { selected: false, title: 'Notice', name: '공지사항', link: '/investors/notice' },
    { selected: false, title: 'Stock Information', name: '주가정보', link: '/investors/stock' },
    { selected: false, title: 'Filings', name: '공시자료', link: '/investors/filings' },
    { selected: false, title: 'Financials', name: '재무제표', link: '/investors/finance' },
    { selected: false, title: 'News', name: '업계뉴스', link: '/investors/news' },
  ]

  function ru(a) {
    menus.forEach(b => (b.selected = false))
    menus.find(b => b.link == a.route.id).selected = true
    menus = menus
  }

  $: ru($page)
</script>

<svelte:head>
  <title>{menus.find(a => a.selected)?.title}</title>
</svelte:head>
<PageMarginTop />
<Section>
  <div class="grid gap-[6rem] p:gap-[3rem]">
    <SubMenus {menus} />
    <div>
      <h1>{menus.find(a => a.selected)?.title}</h1>
      <p class="fg-sub text24-500">{menus.find(a => a.selected)?.name}</p>
    </div>
  </div>
</Section>
<slot />
