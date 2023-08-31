<script>
  import { onMount } from 'svelte'
  import Chart from '$lib/components/Chart.svelte'
  import Table from '$lib/components/Table.svelte'
  import Section from '$lib/components/Section.svelte'
  import { page } from '$app/stores'
  import { __e } from '$lib/utils'

  export let data

  let lang = $page.params.lang

  let charts = [
    {
      title: __e(lang, '자산총계'),
      data: [
        { year: 2020, value: 32410 },
        { year: 2021, value: 87673 },
        { year: 2022, value: 75469 },
      ],
    },
    {
      title: __e(lang, '부채총계'),
      data: [
        { year: 2020, value: 2520 },
        { year: 2021, value: 3010 },
        { year: 2022, value: 4961 },
      ],
    },
    {
      title: __e(lang, '자본총계'),
      data: [
        { year: 2020, value: 29891 },
        { year: 2021, value: 84663 },
        { year: 2022, value: 70508 },
      ],
    },
    {
      title: __e(lang, '매출액'),
      data: [
        { year: 2020, value: 713 },
        { year: 2021, value: 1597 },
        { year: 2022, value: 743 },
      ],
    },
  ]

  let chart = [
    [__e(lang, '항목'), 2020, 2021, 2022],
    [__e(lang, '자산총계 (단위:백만원)'), '32,410', '87,673', '75,469'],
    [__e(lang, '부채총계 (단위:백만원)'), '2,520', '3,010', '4,961'],
    [__e(lang, '자본총계 (단위:백만원)'), '29,891', '84,663', '70,508'],
    [__e(lang, '매출액 (단위:백만원)'), '713', '1,597', '743'],
    [__e(lang, '영업이익 (단위:백만원)'), '-14,966', '-20,731', '-19,341'],
    [__e(lang, '당기순이익 (단위: 백만원)'), '-14,882', '-20,692', '-18,137'],
  ]

  onMount(() => {})
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
