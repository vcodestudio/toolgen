<script>
  import Department from '../../components/Department.svelte'
  import PageMarginTop from '../../components/PageMarginTop.svelte'
  import Section from '../../components/Section.svelte'
  import Slider from '../../components/Slider.svelte'

  let jobs = {
    category: [
      { name: 'All Promoition', slug: 'all' },
      { name: 'Project Leader', slug: 'leader' },
      { name: 'Researcher', slug: 'researcher' },
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

  let currentCategory = jobs.category[0]
</script>

<PageMarginTop />
<Section>
  <div class="grid grid-cols-2 gap-8 phone:grid-cols-1">
    <div class="flex flex-col justify-center gap-4">
      <h1>
        Join<br />
        Our Journey
      </h1>
      <p>
        우리는 유전자 편집 기술의 잠재력을 최대한 발휘하기 위한 중요한 여정에 있으며, 우리의 성공은 역동적이고
        열정적이며 다양한 팀에 의해 주도되고 있습니다. 전 세계에서 심각한 질병을 앓고 있는 사람들을 위한 혁신적인
        의약품을 개발합니다.
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
    {#each [1, 2, 3] as item}
      <div class="swiper-slide">
        <img class="block" src="/images/carrer-slide.jpg" alt="..." />
      </div>
    {/each}
  </Slider>
</Section>
<Section class_="fill-navy text-white relative overflow-hidden">
  <div class="grid grid-cols-[1fr,2fr] gap-20 relative phone:grid-cols-1 phone:gap-2">
    <div>
      <h3>인재 DB 등록</h3>
    </div>
    <div class="grid gap-8 phone:gap-2">
      <p class="text18-500">
        툴젠은 CRISPR 유전자교정 원천특허 기술을 기반으로 인류의 더 나은 삶을 위한 일에 관심과 열정이 있는 인재를 찾고
        있습니다.
      </p>
      <p>
        •툴젠의 가족이 되기를 희망하시는 분은 입사지원서를 등록해 주시기 바랍니다.<br />
        •등록된 입사지원서는 채용담당자에게 전달되며, 지원하신 해당 직무와 관련하여 인력수요 발생시 적합한 인재는 별도의
        채용절차를 통해 채용을 진행할 수 있습니다.<br />
        •제출한 입사지원서는 접수일로부터 1년간 보관 후 삭제됩니다.<br />
        •인재DB에 등록된 지원자도 정기/수시채용에 중복 지원이 가능합니다.
      </p>
      <div class="flex phone:justify-center phone:pt-4">
        <button class="fill">
          <span> 인재 DB 등록하기 </span>
        </button>
      </div>
    </div>
  </div>
</Section>
{#if jobs}
  <Section>
    <div class="grid gap-8">
      <h3>채용 중 공고</h3>
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
