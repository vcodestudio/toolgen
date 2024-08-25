<script>
  import { onMount } from 'svelte'
  import Chart from '$lib/components/Chart.svelte'
  import Table from '$lib/components/Table.svelte'
  import Section from '$lib/components/Section.svelte'
  import { page } from '$app/stores'
  import { __e } from '$lib/utils'

  let data

  let lang = $page.params.lang

  let chart_1 = []
  let chart_2 = []

  function digit(num) {
    if (Math.abs(num) > 1000000) num = parseInt(num * 0.000001)
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  function createChart1(data) {
    let years = []
    // 2020 ~ new Date().getFullYear()
    for (let i = 2020; i < 2023; i++) {
      years.push(i)
    }
    let data_ = data.map(a => a.slice(0, 4))
    let keys = []
    if (data.length) {
      keys = data_[0].map(a => __e(lang, a[0]))
    }
    let charts = []
    keys.forEach((key, i) => {
      let chart = {
        title: key,
        data: [],
      }
      years.forEach((year, j) => {
        chart.data.push({
          year: year,
          value: digit(data_[j][i][1] ?? 0),
        })
      })
      charts.push(chart)
    })
    return charts
  }
  function createChart2(data) {
    const date = new Date()
    const koreaTime = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }))
    const curYear = koreaTime.getFullYear()
    let table = []
    let row1 = [__e(lang, '항목')]
    for (let i = 2020; i < curYear; i++) {
      row1.push(i)
    }
    table.push(row1)
    const keys = data[0].map(a => a[0])
    keys.forEach(key => {
      let row = [key]
      data.forEach(d => {
        let value = d.find(a => a[0] === key)
        if (value[1]) row.push(digit(value[1]))
      })
      table.push(row)
    })
    table.forEach(row => {
      row[0] = __e(lang, row[0].replace('(손실)', '') + ' (단위:백만원)')
    })

    return table
  }

  onMount(async () => {
    const res = await fetch(location.pathname, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: { lang } }),
    })
    data = await res.json()
    console.log(data.data)
    // get all promises data in data
    let datas = data.data.map(a => a.data)
    Promise.all(datas).then(values => {
      chart_1 = createChart1(values)
      chart_2 = createChart2(values)
    })
  })
</script>

{#if !data}
  loading
{:else}
  <Section>
    <div class="grid grid-cols-2 gap-x-[5em] gap-y-[2.5em] phone:grid-cols-1">
      {#each chart_1 as item}
        <Chart title={item.title} data={item.data} />
      {/each}
    </div>
  </Section>
{/if}
<Section>
  <Table data={chart_2} />
</Section>
