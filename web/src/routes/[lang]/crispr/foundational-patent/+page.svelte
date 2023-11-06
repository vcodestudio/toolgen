<script>
  import Pagination from '$lib/components/Pagination.svelte'
  import Section from '$lib/components/Section.svelte'
  import Table from '$lib/components/Table.svelte'
  import { page } from '$app/stores'
  import { __t, __e } from '$lib/utils'
  import { popup } from '$lib/screen'
  import { onMount } from 'svelte'
  import PaginationJson from '$lib/components/Pagination_JSON.svelte'

  let lang = $page.params.lang
  let dats = [[], [], []]
  let posts = []
  export let data
  $: tab = data.tab

  let pgNum = 1
  let selectedCountry = 'all'
  let popOpen = false
  $: {
    pgNum = pgNum
  }
  $: {
    popOpen = selectedCountry != 'all'

    posts =
      dats.length == 3
        ? dats[tab - 1]
            ?.filter(a => {
              return a.con_code.includes(selectedCountry) || selectedCountry == 'all'
            })
            .sort((a, b) => +a.date.replaceAll('-', '') - b.date.replaceAll('-', ''))
            .reverse()
        : []

    // pgNum = 1
  }
  $: selectedCountry && (pgNum = 1)
  let countries = []

  countries = data.countries?.data?.attributes?.item ?? []
  countries.forEach(country => {
    country.title = (lang == 'eng' ? country.eng_name : country.name) ?? ''
  })
  countries = countries
  $: countries_ = countries.filter(a => {
    return dats[tab - 1].find(b => b.con_code == a.slug) ?? false
  })

  onMount(() => {
    const dats_ = data.dats?.data?.map(a => a.attributes) ?? []
    dats.forEach((dat, i) => {
      dats[i] = dats_.filter(a => +a.type == i + 1)
    })
  })

  const lngToX = lng => {
    return (lng / 360 + 0.5) * 100
  }

  const latToY = lat => {
    return (-lat / 180 + 0.5) * 100
  }

  countries.forEach(a => {
    a.lng = parseFloat(a.lng)
    a.lat = parseFloat(a.lat)

    const offset = [-3.5, 13]
    a.x = lngToX(a.lng) + offset[0]
    a.y = latToY(a.lat) + offset[1]
  })

  const _active = 'text24-700 border-b-2 border-black'
  const _inactive = 'text24-400 fg-sub'

  $: chul = posts.filter(a => a.state == '출원').length
  $: dung = posts.filter(a => a.state == '등록').length

  $: posts_ = posts.slice(10 * (pgNum - 1), 10 * pgNum)
</script>

<Section>
  <div class="grid gap-[2rem]">
    <!-- <h2>CRISPR-Cas9 Foundational Patent</h2> -->
    <div class="flex gap-[1.5rem]">
      <a class={tab == 1 ? _active : _inactive} href="?tab=1">{__t('foundational-patent.1', $page.params.lang)}</a>
      <a class={tab == 2 ? _active : _inactive} href="?tab=2">{__t('foundational-patent.2', $page.params.lang)}</a>
    </div>
    <div class="grid gap-4">
      <div class="relative w-full map pc">
        <img
          class="block w-full h-auto"
          src="/images/map.jpg"
          alt="map"
          on:click|self={e => {
            // selectedCountry = 'all'
            popOpen = false
          }}
        />
        {#each countries_ as country}
          {#if country.img?.data?.length ?? false}
            <a
              href="#"
              class:active={selectedCountry == country.slug}
              class="marker text16-500 absolute text-center flex flex-col gap-4 items-center -translate-y-[100%] -translate-x-[50%]"
              style="left:{country.x}%;top:{country.y}%"
              on:click|preventDefault={() => {
                popOpen = !popOpen
                selectedCountry = country.slug
              }}
            >
              {#if selectedCountry == country.slug && popOpen}
                <div class="bg-white rounded-3xl shadow-lg px-[1rem] py-[1rem] relative bottom-4 pointer-events-none">
                  <div class="flex items-center gap-3">
                    <div class="w-[70px] h-[70px] rounded-3xl">
                      <img
                        class="block object-contain w-full h-full"
                        src={country.img?.data[0]?.attributes?.url ?? ''}
                        alt={country.title}
                      />
                    </div>
                    <div class="flex flex-col items-start gap-2">
                      <p class="text16-700 single-line">{country.title}</p>
                      <div class="flex flex-col gap-2 text14-400">
                        <p class="single-line">{__e(lang, '출원')} : {chul}{__e(lang, '개')}</p>
                        <p class="single-line">{__e(lang, '등록')} : {dung}{__e(lang, '개')}</p>
                      </div>
                    </div>
                  </div>
                  <svg
                    class="absolute -translate-x-1/2 left-1/2 top-full"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.5 0H0.5L8 12L15.5 0Z" fill="white" />
                  </svg>
                </div>
              {:else}
                <span>
                  {country.title}
                </span>
              {/if}
              <div class="relative w-0 h-0 rounded-full">
                <div
                  class="pin flex justify-center items-center rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                />
              </div>
            </a>
          {/if}
        {/each}
        {#if tab == 2}
          <button
            class="absolute top-0 right-0 navy"
            on:click={() => {
              popup.set({ type: 'pct', data: dats[2] })
            }}>{__t('foundational-patent.3', $page.params.lang)}</button
          >
        {/if}
      </div>
      <div>
        {#if tab == 2}
          <button
            class="navy mob"
            on:click={() => {
              popup.set({ type: 'pct', data: dats[2] })
            }}>{__t('foundational-patent.3', $page.params.lang)}</button
          >
        {/if}
      </div>
      <div class="flex flex-wrap gap-4 m:scroll-x m:flex-nowrap">
        <button
          class:fill={selectedCountry == 'all'}
          on:click={() => {
            selectedCountry = 'all'
          }}>{__e(lang, '전체')}</button
        >
        {#each countries_ as country}
          <button
            class:fill={country.slug == selectedCountry}
            on:click={() => {
              selectedCountry = country.slug
            }}>{country.title}</button
          >
        {/each}
      </div>

      <div class="flex justify-end">
        <p class="fg-sub single-line">
          {__e(lang, '출원')}: {chul}{__e(lang, '건')} | {__e(lang, '등록')}: {dung}{__e(lang, '건')}
        </p>
      </div>
      <Table
        data={[
          [__e(lang, '국가'), __e(lang, '출원번호'), __e(lang, '출원일'), __e(lang, '상태')],
          ...posts_.map(a => [
            countries.find(b => b.slug == a.con_code)?.title ?? a.con_code,
            a.title,
            a.date,
            __e(lang, a.state),
          ]),
        ]}
      />
    </div>
  </div>

  <PaginationJson
    items={posts}
    current={pgNum}
    on:pageTo={e => {
      pgNum = e.detail
    }}
  />
</Section>
