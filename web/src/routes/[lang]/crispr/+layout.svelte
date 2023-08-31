<script>
  import PageMarginTop from '$lib/components/PageMarginTop.svelte'
  import Section from '$lib/components/Section.svelte'
  import SubMenus from '$lib/components/SubMenus.svelte'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  import { __e } from '$lib/utils'

  let lang = $page.params.lang
  let menus = [
    { selected: false, name: 'CRISPR-Cas9 Foundational Patent', link: '/crispr/foundational-patent' },
    { selected: false, name: __e(lang, '저촉심사'), link: '/crispr/test' },
    { selected: false, name: 'CRISPR-Cas9', link: '/crispr/cas9' },
  ]

  menus = menus
    .filter(a => {
      return (a.lang && a.lang == lang) || !a.lang
    })
    .map(a => {
      a.link = `/${$page.params.lang}${a.link}`
      return a
    })
  $: currentPage = menus.find(a => $page.data.pathname.includes(a.link))
</script>

<svelte:head>
  <title>{currentPage?.name ?? 'TOOLGEN'}</title>
</svelte:head>
<PageMarginTop />
<Section class_="pb-0">
  <div class="grid gap-[6rem]">
    <SubMenus {menus} />
  </div>
</Section>
<slot />
