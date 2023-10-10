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

  onMount(() => {
    // console.log(data)
  })
  let jobs = {
    category: [
      { name: 'All Positions', slug: 'all' },
      { name: 'Project Leaders', slug: 'leader' },
      { name: 'Researchers', slug: 'researcher' },
    ],
    // fill three departments
    data: [
      { department: 'Platform A', category: { slug: 'researcher' }, title: 'Project Team Leader, Crop 1', link: '#' },
      { department: 'Platform B', category: { slug: 'leader' }, title: 'Project Team Leader, Crop 1', link: '#' },
      { department: 'Platform C', category: { slug: 'researcher' }, title: 'Project Team Leader, Crop 2', link: '#' },
      { department: 'Platform A', category: { slug: 'leader' }, title: 'Project Team Leader, Crop 3', link: '#' },
      { department: 'Platform B', category: { slug: 'researcher' }, title: 'Project Team Leader, Crop 4', link: '#' },
    ],
  }

  jobs = { category: [], data: [] }

  let currentCategory = jobs.category[0]
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
{#if jobs.length}
  <Section>
    <div class="grid gap-8">
      <h3>{__e(lang, '채용 중 공고')}</h3>
      <div class="flex gap-4 flex-nowrap scroll-x">
        {#each jobs.category as category}
          <button
            class={currentCategory.slug == category.slug ? 'navy' : 'bluegray'}
            on:click={() => {
              currentCategory = category
            }}
          >
            <span>{category.name}</span>
          </button>
        {/each}
      </div>
      {#each [...new Set(jobs.data
            .filter(a => a.category.slug == currentCategory.slug || currentCategory.slug == 'all')
            .map(a => a.department))].sort() as item}
        <Department name={item} members={jobs.data.filter(a => a.department == item)} />
      {/each}
    </div>
  </Section>
{/if}
