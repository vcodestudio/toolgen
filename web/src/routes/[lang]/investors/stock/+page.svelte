<script>
  import Section from '$lib/components/Section.svelte'
  import Table from '$lib/components/Table.svelte'
  import { onMount } from 'svelte'

  import { page } from '$app/stores'
  import { __e } from '$lib/utils'

  export let data
  let pageLoaded = false
  let stockData = {}

  onMount(async () => {
    await getData()
    pageLoaded = true
  })

  async function getData() {
    const res = await fetch($page.data.pathname, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    stockData = await res.json()
  }

  let section = {
    type: 'chart',
    date: 'day',
  }

  let lang = $page.params.lang

  let types = [
    ['chart', __e(lang, '주가 그래프')],
    ['trade', __e(lang, '최근 거래')],
    ['hoga', __e(lang, '호가 정보')],
    ['daily', __e(lang, '일별 시세')],
    ['foreign', __e(lang, '외국인 지분율')],
  ]

  let dates = [
    ['day', __e(lang, '1일')],
    ['week', __e(lang, '1주일')],
    ['month3', __e(lang, '3개월')],
    ['year', __e(lang, '1년')],
    ['year3', __e(lang, '3년')],
    ['year5', __e(lang, '5년')],
    ['year10', __e(lang, '10년')],
  ]

  let biz_content

  function clearArrows() {
    const arrows = biz_content.querySelectorAll('img')
    arrows.forEach(a => {
      let arrow = document.createElement('span')
      switch (a.alt) {
        case '상승':
          arrow.textContent = '▲'
          break
        case '하락':
          arrow.textContent = '▼'
          break
      }
      // replace image with text
      a.parentNode.replaceChild(arrow, a)
    })
    return ''
  }
</script>

<Section>
  {#if pageLoaded}
    <div class="grid gap-[1.5rem]">
      <div class="flex items-center gap-4">
        <h3 class="flex-auto">{__e(lang, '주요시세')}</h3>
      </div>
      <Table
        data={[
          [__e(lang, '현재가'), __e(lang, '고가'), __e(lang, '저가'), '{+/-}', '%'],
          [
            stockData.stockInfo.find(a => a[0] == '시가')[1],
            stockData.stockInfo.find(a => a[0] == '고가')[1],
            stockData.stockInfo.find(a => a[0] == '저가')[1],
            stockData.stockInfo.find(a => a[0] == '시가')[1].replace(',', '') -
              stockData.stockInfo.find(a => a[0] == '전일가')[1].replace(',', ''),
            stockData.stockInfo.find(a => a[0] == '등락률(%)')[1],
          ],
        ]}
      />
      <div class="flex items-center gap-2">
        {#each types as [t, name]}
          <button class="square" class:navy={section.type == t} on:click={e => (section.type = t)}>{name}</button>
        {/each}
      </div>
      <div class={section.type ?? 'normal'} id="b_cont" bind:this={biz_content}>
        {#if section.type == 'chart'}
          <div class="flex items-center gap-2">
            {#each dates as [d, name]}
              <button class:fill={section.date == d} on:click={e => (section.date = d)}>{name}</button>
            {/each}
          </div>
          <div>
            <img
              class="block w-full"
              src={`https://ssl.pstatic.net/imgfinance/chart/item/area/${
                section.date
              }/199800.png?sidcode=${new Date().getTime()}`}
              alt="주가 그래프"
            />
          </div>
        {:else if section.type == 'trade'}
          {@html stockData.trade}
          {setTimeout(clearArrows, 0)}
        {:else if section.type == 'hoga'}
          {@html stockData.hoga}
        {:else if section.type == 'daily'}
          {@html stockData.daily}
          {setTimeout(clearArrows, 0)}
        {:else if section.type == 'foreign'}
          <table>
            <thead>
              <tr>
                <th rowspan="2">{__e(lang, '날짜')}</th>
                <th rowspan="2">{__e(lang, '종가')}</th>
                <th rowspan="2">{__e(lang, '전일비')}</th>
                <th rowspan="2">{__e(lang, '등락률')}</th>
                <th rowspan="2">{__e(lang, '거래량')}</th>
                <th colspan="1">{__e(lang, '기관')}</th>
                <th colspan="3">{__e(lang, '외국인')}</th>
              </tr>
              <tr>
                <th>{__e(lang, '순매매량')}</th>
                <th>{__e(lang, '순매매량')}</th>
                <th>{__e(lang, '보유주수')}</th>
                <th>{__e(lang, '지분율')}</th>
              </tr>
            </thead>
            <tbody>
              {@html stockData.foreign}
            </tbody>
          </table>
        {/if}
      </div>
    </div>
  {:else}
    <div class="pb-4 item">
      <h3 class="text-center">Loading</h3>
    </div>
  {/if}
</Section>

<style>
  :global(table td img) {
    display: inline-block;
  }
  :global(#b_cont table img) {
    display: none;
  }
</style>
