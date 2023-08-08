<script>
  import Section from '../../../components/Section.svelte'
  import Table from '../../../components/Table.svelte'
  import { onMount } from 'svelte'

  export let data
  onMount(() => {
    console.log(data)
  })

  let section = {
    type: 'chart',
    date: 'day',
  }

  let types = [
    ['chart', '주가 그래프'],
    ['trade', '최근 거래'],
    ['hoga', '호가 정보'],
    ['daily', '일별 시세'],
    ['foreign', '외국인 지분율'],
  ]

  let dates = [
    ['day', '1일'],
    ['week', '1주일'],
    ['month3', '3개월'],
    ['year', '1년'],
    ['year3', '3년'],
    ['year5', '5년'],
    ['year10', '10년'],
  ]
</script>

<Section>
  <div class="grid gap-[1.5rem]">
    <div class="flex items-center gap-4">
      <h3 class="flex-auto">주요시세</h3>
    </div>
    <Table
      data={[
        ['현재가', '고가', '저가', '{+/-}', '%'],
        [
          data.stockInfo.find(a => a[0] == '시가')[1],
          data.stockInfo.find(a => a[0] == '고가')[1],
          data.stockInfo.find(a => a[0] == '저가')[1],
          data.stockInfo.find(a => a[0] == '시가')[1].replace(',', '') -
            data.stockInfo.find(a => a[0] == '전일가')[1].replace(',', ''),
          data.stockInfo.find(a => a[0] == '등락률(%)')[1],
        ],
      ]}
    />
    <div class="flex items-center gap-2">
      {#each types as [t, name]}
        <button class="square" class:navy={section.type == t} on:click={e => (section.type = t)}>{name}</button>
      {/each}
    </div>
    <div class={section.type ?? 'normal'}>
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
        {@html data.trade}
      {:else if section.type == 'hoga'}
        {@html data.hoga}
      {:else if section.type == 'daily'}
        {@html data.daily}
      {:else if section.type == 'foreign'}
        <table>
          <thead>
            <tr>
              <th rowspan="2">날짜</th>
              <th rowspan="2">종가</th>
              <th rowspan="2">전일비</th>
              <th rowspan="2">등락률</th>
              <th rowspan="2">거래량</th>
              <th colspan="1">기관</th>
              <th colspan="3">외국인</th>
            </tr>
            <tr>
              <th>순매매량</th>
              <th>순매매량</th>
              <th>보유주수</th>
              <th>지분율</th>
            </tr>
          </thead>
          <tbody>
            {@html data.foreign}
          </tbody>
        </table>
      {/if}
    </div>
  </div>
</Section>

<style>
  :global(table td img) {
    display: inline-block;
  }
</style>
