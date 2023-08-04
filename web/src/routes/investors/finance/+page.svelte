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
      data: [
        { year: 2020, value: 32410 },
        { year: 2021, value: 87673 },
        { year: 2022, value: 75469 },
      ],
    },
    {
      title: '부채총계',
      data: [
        { year: 2020, value: 2520 },
        { year: 2021, value: 3010 },
        { year: 2022, value: 4961 },
      ],
    },
    {
      title: '자본총계',
      data: [
        { year: 2020, value: 29891 },
        { year: 2021, value: 84663 },
        { year: 2022, value: 70508 },
      ],
    },
    {
      title: '매출액',
      data: [
        { year: 2020, value: 713 },
        { year: 2021, value: 1597 },
        { year: 2022, value: 743 },
      ],
    },
  ]

  let chart = [
    ['항목', 2020, 2021, 2022],
    ['자산총계 (단위:백만원)', '32,410', '87,673', '75,469'],
    ['부채총계 (단위:백만원)', '2,520', '3,010', '4,961'],
    ['자본총계 (단위:백만원)', '29,891', '84,663', '70,508'],
    ['매출액 (단위:백만원)', '713', '1,597', '743'],
    ['영업이익 (단위:백만원)', '-14,966', '-20,731', '-19,341'],
    ['당기순이익 (단위: 백만원)', '-14,882', '-20,692', '-18,137'],
  ]

  onMount(() => {
    // const data_ = data.data
    // charts.forEach(obj => {
    //   data_.forEach(item => {
    //     obj.data.push({
    //       year: item.year,
    //       value: item,
    //     })
    //   })
    // })
  })
</script>

{#await data}
  loading
{:then data}
  <Section>
    <div class="grid grid-cols-2 gap-x-[5em] gap-y-[2.5em] phone:grid-cols-1">
      {#each charts as item}
        <Chart title={item.title} data={item.data} />
      {/each}
    </div>
  </Section>
{/await}
<Section>
  <Table data={chart} />
</Section>
