<script>
  import Pagination from '../../components/Pagination.svelte'
  import Section from '../../components/Section.svelte'
  import Table from '../../components/Table.svelte'
  import { page } from '$app/stores'
  import { popup } from '../../lib/screen'
  import { onMount } from 'svelte'

  let sims = ['01', '02', '03']
  let dats = []
  export let data
  $: tab = data.tab
  $: posts =
    dats.length == 3
      ? dats[tab - 1]
          .filter(a => {
            return a.con_code.includes(selectedCountry) || selectedCountry == 'all'
          })
          .sort((a, b) => +a.date.replaceAll('-', '') - b.date.replaceAll('-', ''))
          .reverse()
      : []

  const pgSize = 10
  $: pg = +$page.url.searchParams.get('page') ?? 1 + 0 * selectedCountry.length
  $: maxPg = Math.ceil(posts.length / pgSize)
  $: posts_ = posts.slice((pg - 1) * pgSize, pg * pgSize)

  onMount(() => {
    sims.forEach((a, i) => {
      fetch(`/crispr/${a}.json`)
        .then(r => r.json())
        .then(r => {
          dats[i] = r
        })
    })
  })
  let selectedCountry = 'all'
  // 한국, 미국, 일본, 케나다, 브라질, 유럽, 인도
  let countries = [
    { name: '호주', slug: 'AU', lng: '133.775136', lat: '-25.274398' },
    { name: '브라질', slug: 'BR', lng: '-51.925280', lat: '-14.235004' },
    { name: '캐나다', slug: 'CA', lng: '-106.346771', lat: '56.130366' },
    { name: '중국', slug: 'CN', lng: '104.195397', lat: '35.861660' },
    { name: '독일', slug: 'DE', lng: '10.451526', lat: '51.165691' },
    { name: '홍콩', slug: 'HK', lng: '114.109497', lat: '22.396428' },
    { name: '인도', slug: 'IN', lng: '78.962880', lat: '20.593684' },
    { name: '일본', slug: 'JP', lng: '138.252924', lat: '36.204824' },
    { name: '대한민국', slug: 'KR', lng: '127.766922', lat: '35.907757' },
    { name: '싱가포르', slug: 'SG', lng: '103.819836', lat: '1.352083' },
    { name: '미국', slug: 'US', lng: '-95.712891', lat: '37.090240' },
  ]

  function isIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function'
  }

  const lngToX = lng => {
    return (lng / 360 + 0.5) * 100
  }

  const latToY = lat => {
    return (-lat / 180 + 0.5) * 100
  }

  countries.forEach(a => {
    a.lng = parseFloat(a.lng)
    a.lat = parseFloat(a.lat)

    const offset = [-4.5, 9]
    a.x = lngToX(a.lng) + offset[0]
    a.y = latToY(a.lat) + offset[1]
  })

  const _active = 'text24-700 border-b-2 border-black'
  const _inactive = 'text24-400 fg-sub'

  $: chul = posts.filter(a => a.state == '출원').length
  $: dung = posts.filter(a => a.state == '등록').length
</script>

<Section>
  <div class="grid gap-[2rem]">
    <h2>CRISPR-Cas9 Foundational Patent</h2>
    <div class="flex gap-[1.5rem]">
      <a class={tab == 1 ? _active : _inactive} href="?tab=1">원천특허</a>
      <a class={tab == 2 ? _active : _inactive} href="?tab=2">응용특허</a>
    </div>
    <div class="grid gap-4">
      <div class="relative w-full map pc">
        <img class="block w-full h-auto" src="/images/map.jpg" alt="map" />
        {#each countries as country}
          <a
            href="#"
            class:active={selectedCountry == country.slug}
            class="marker text16-500 absolute text-center flex flex-col gap-4 items-center -translate-y-[100%] -translate-x-[50%]"
            style="left:{country.x}%;top:{country.y}%"
            on:click|preventDefault={() => {
              selectedCountry = country.slug
            }}
          >
            {#if selectedCountry == country.slug}
              <div class="bg-white rounded-3xl shadow-lg px-[1rem] py-[1rem] relative bottom-4 pointer-events-none">
                <div class="flex items-center gap-3">
                  <div class="w-[70px] h-[70px] rounded-3xl">
                    <img
                      class="block object-cover w-full h-full"
                      src="/images/flags/{country.slug.toLowerCase()}.jpg"
                      alt="map"
                    />
                  </div>
                  <div class="flex flex-col items-start gap-2">
                    <p class="text16-700 single-line">{country.name}</p>
                    <div class="flex flex-col gap-2 text14-400">
                      <p class="single-line">출원 : {chul}개</p>
                      <p class="single-line">특허 : {dung}개</p>
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
                {country.name}
              </span>
            {/if}
            <div class="relative w-0 h-0 rounded-full">
              <div
                class="pin flex justify-center items-center rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              />
            </div>
          </a>
        {/each}
        {#if tab == 2}
          <button
            class="absolute top-0 right-0 navy"
            on:click={() => {
              popup.set({ type: 'pct', data: dats[2] })
            }}>PCT 출원 리스트</button
          >
        {/if}
      </div>
      <div>
        {#if tab == 2}
          <button
            class="navy mob"
            on:click={() => {
              popup.set({ type: 'pct', data: dats[2] })
            }}>PCT 출원 리스트</button
          >
        {/if}
      </div>
      <div class="flex flex-wrap gap-4 m:scroll-x m:flex-nowrap">
        <button
          class:fill={selectedCountry == 'all'}
          on:click={() => {
            selectedCountry = 'all'
          }}>전체</button
        >
        {#each countries as country}
          <button
            class:fill={country.slug == selectedCountry}
            on:click={() => {
              selectedCountry = country.slug
            }}>{country.name}</button
          >
        {/each}
      </div>

      <div class="flex justify-end">
        <p class="fg-sub single-line">
          출원: {chul}건 | 등록: {dung}건
        </p>
      </div>
      <Table
        data={[['국가', '특허번호', '등록일', '상태'], ...posts.map(a => [a.con_name, a.title, a.date, a.state])]}
      />
      {#if posts.length}
        <!-- <Pagination maxPages={maxPg} current={pg} /> -->
      {/if}
    </div>
  </div>
</Section>
