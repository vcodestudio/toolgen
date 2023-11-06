<script>
  import Department from '$lib/components/Department.svelte'
  import PageMarginTop from '$lib/components/PageMarginTop.svelte'
  import Section from '$lib/components/Section.svelte'
  import Slider from '$lib/components/Slider.svelte'
  import { popup } from '$lib/screen'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { __e, __t } from '$lib/utils'

  export let data

  let lang = $page.params.lang
  let catIdx = 0

  let jobs = data.recruit?.data?.attributes?.item ?? []
  let job_active = data.recruit?.data?.attributes?.active ?? false
  $: job_categories = ['All Positions'].concat([...new Set(job_data.map(a => a.job))] ?? [])
  $: job_data = jobs ?? []
</script>

<PageMarginTop />
<Section>
  <div class="grid grid-cols-2 gap-8 phone:grid-cols-1">
    <div class="flex flex-col justify-center gap-4">
      <h1 class="color-navy">
        Join<br />
        Our Journey
      </h1>
      <p>
        {data.page[0]?.content.text}
      </p>
    </div>
    <img src="/images/career/1.png" alt=".." />
  </div>
</Section>
<Section class_="phone:f-width">
  <Slider
    navigation={false}
    color={{
      active: 'fill-mint',
      inactive: 'fill-navy',
    }}
  >
    {#each data?.page[1]?.imgs?.data ?? [] as item}
      <div class="swiper-slide">
        <img class="block w-full object-cover h-[550px] m:h-[450px] p:h-[250px]" src={item.attributes.url} alt="..." />
      </div>
    {/each}
  </Slider>
</Section>

<Section class_="fill-navy text-white relative overflow-hidden">
  <div class="grid grid-cols-[1fr,2fr] gap-20 relative phone:grid-cols-1 phone:gap-2">
    <div>
      <h3>{data?.page[2]?.title}</h3>
    </div>
    <div class="grid gap-8 phone:gap-2">
      {@html data?.page[2]?.content?.html}
      <div class="flex phone:justify-center phone:pt-4">
        <button
          class="fill"
          on:click={() => {
            popup.set({ type: 'db' })
          }}
        >
          <span> {__e(lang, '인재 DB 등록하기')} </span>
        </button>
      </div>
    </div>
  </div>
</Section>
{#if job_active && job_data.length}
  <Section>
    <div class="grid gap-8">
      <h3>{__e(lang, '채용 중 공고')}</h3>
      <div class="flex gap-4 flex-nowrap scroll-x">
        {#each job_categories as category, idx}
          <button
            class={job_categories[catIdx] == category ? 'navy' : 'bluegray'}
            on:click={() => {
              catIdx = idx
            }}
          >
            <span>{category}</span>
          </button>
        {/each}
      </div>
      {#each [...new Set(job_data
            .filter(a => a.job == job_categories[catIdx] || catIdx == 0)
            .map(a => a.department))].sort() as item}
        <Department
          name={item}
          members={job_data.filter(a => a.department == item && (a.job == job_categories[catIdx] || catIdx == 0))}
        />
      {/each}
    </div>
  </Section>
{/if}
