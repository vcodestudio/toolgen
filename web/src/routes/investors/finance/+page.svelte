<script>
  import { onMount } from 'svelte'
  import Chart from '../../../components/Chart.svelte'
  import Table from '../../../components/Table.svelte'
  import Section from '/src/components/Section.svelte'

  export let data
  const chart_headers = ['자산총계', '부채총계', '자본총계', '매출액']

  let charts = [
    {
      title: '자산총계',
      data: [],
    },
    {
      title: '부채총계',
      data: [],
    },
    {
      title: '자본총계',
      data: [],
    },
    {
      title: '매출액',
      data: [],
    },
  ]

  onMount(() => {
    const data_ = data.data
    console.log(data_[0])
    charts.forEach(obj => {
      data_.forEach(item => {
        obj.data.push({
          year: item.year,
          value: item,
        })
      })
    })
  })
</script>

{#await data}
  loading
{:then data}
  {JSON.stringify(data)}
  <Section>
    <div class="grid grid-cols-2 gap-x-[5em] gap-y-[2.5em] phone:grid-cols-1">
      {#each charts as item}
        <Chart title={item.title} data={item.data} />
      {/each}
    </div>
  </Section>
{/await}
<Section>
  <Table
    data={[
      ['항목', 2019, 2020, 2021],
      ['자산총계', '29,865', '32,410', '33,000'],
      ['자산총계', '29,865', '32,410', '33,000'],
      ['자산총계', '29,865', '32,410', '33,000'],
    ]}
  />
</Section>
