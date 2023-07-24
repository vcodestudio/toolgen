<script>
  import Banner from '/src/components/Banner.svelte'
  import DownloadButton from '../../components/DownloadButton.svelte'
  import Section from '../../components/Section.svelte'
  import Overview from '../../components/Overview.svelte'
  import CardPlus from '../../components/CardPlus.svelte'
  import CardNews from '../../components/CardNews.svelte'
  import MobileHeaderW from '../../components/MobileHeaderW.svelte'
  import CardPlusItem from '../../components/CardPlusItem.svelte'
</script>

<MobileHeaderW />
<Banner src="/images/static/f8710dc13167a75c7c4cc9749f255a3a.jpg">
  <h1>Platform</h1>
  <p class="max-w-[650px] em:leading-7">
    유전자가위 플랫폼 고도화 및 다양한 CRISPR/Cas9 관련 플랫폼의 산업적 응용에 더욱 적합한 기능성을 갖도록 향상시키는
    연구를 진행하여 유전자교정 업계를 선도합니다.
  </p>
  <div class="flex-auto" />
  <div>
    <DownloadButton href="/" title="PDF 다운로드" />
  </div>
</Banner>
<Section>
  <Overview>
    <p>
      유전자가위 기술은 다양한 분야에 적용이 가능한 플랫폼 기술(기존 의약품에 적용하여 다수의 후보 물질을 도출할 수 있는
      기반 기술)의 특징을 가지고 있습니다. 전 세계적으로 다양한 연구를 통해 유전자 가위 고도화 및 안전성 평가 측정 기술
      등이 발전되고 있으며 툴젠은 우수한 플랫폼 특허 선점을 위한 연구를 진행 중입니다. 또한 이러한 플랫폼 기술을
      응용하여 새로운 사업확장을 목표로 연구하고 있습니다.
    </p>
    <div class="grid gap-6">
      {#each [{ open: false, background: '/images/static/bbf10026068fc3abe600343b9ef1e371.jpg', title: '유전자 가위 고도화', content: `
                    <p>더 정확한 유전자 가위 - 유전자 가위는 표적 타겟 (on-target) 이외에 비표적 타겟 (off-target)에서 교정 효과를 보일 수 있다. 유전자 가위 치료제를 개발하기 위해서는 높은 on-target 교정 효능과 낮은 off-target 교정 효과가 이상적이다. 툴젠은 기존의 wild type Cas9보다 개선된 Sniper-Cas9, Sniper2L등을 개발하여 Nature Communications (2018), Nature Chemical Biology (2023)에 각각 발표했습니다.</p>
                    <p>더 작은 유전자 가위 - 인체에 직접 투여하는 유전자 치료제를 개발할 때 많은 경우 바이러스를 전달체로 이용하여 전달하게 됩니다. 이럴 경우 전달하려는 유전자 가위의 사이즈가 전달체로 이용하려는 바이러스의 packaging limit보다 적어야 하는 제약이 생기게 된다. 툴젠은 기존 유전자 가위 보다 더 작은 Cj-Cas9을 개발하여 Nature Communications (2017)지에 발표했습니다.</p>
                    ` }, { open: false, background: '/images/static/673c1ae7c7fe310f6009cdf77b4ced6b.jpg', title: '유전자 가위 안전성 평가 기술', content: `
                    <p>더 정확한 유전자 가위 - 유전자 가위는 표적 타겟 (on-target) 이외에 비표적 타겟 (off-target)에서 교정 효과를 보일 수 있다. 유전자 가위 치료제를 개발하기 위해서는 높은 on-target 교정 효능과 낮은 off-target 교정 효과가 이상적이다. 툴젠은 기존의 wild type Cas9보다 개선된 Sniper-Cas9, Sniper2L등을 개발하여 Nature Communications (2018), Nature Chemical Biology (2023)에 각각 발표했습니다.</p>
                    <p>더 작은 유전자 가위 - 인체에 직접 투여하는 유전자 치료제를 개발할 때 많은 경우 바이러스를 전달체로 이용하여 전달하게 됩니다. 이럴 경우 전달하려는 유전자 가위의 사이즈가 전달체로 이용하려는 바이러스의 packaging limit보다 적어야 하는 제약이 생기게 된다. 툴젠은 기존 유전자 가위 보다 더 작은 Cj-Cas9을 개발하여 Nature Communications (2017)지에 발표했습니다.</p>
                    ` }, { open: false, background: '/images/static/ed6f0bb7d170567f3b828aba52367251.jpg', title: '유전자 가위를 이용한 새로운 사업 확장', content: `
                    <p>더 정확한 유전자 가위 - 유전자 가위는 표적 타겟 (on-target) 이외에 비표적 타겟 (off-target)에서 교정 효과를 보일 수 있다. 유전자 가위 치료제를 개발하기 위해서는 높은 on-target 교정 효능과 낮은 off-target 교정 효과가 이상적이다. 툴젠은 기존의 wild type Cas9보다 개선된 Sniper-Cas9, Sniper2L등을 개발하여 Nature Communications (2018), Nature Chemical Biology (2023)에 각각 발표했습니다.</p>
                    <p>더 작은 유전자 가위 - 인체에 직접 투여하는 유전자 치료제를 개발할 때 많은 경우 바이러스를 전달체로 이용하여 전달하게 됩니다. 이럴 경우 전달하려는 유전자 가위의 사이즈가 전달체로 이용하려는 바이러스의 packaging limit보다 적어야 하는 제약이 생기게 된다. 툴젠은 기존 유전자 가위 보다 더 작은 Cj-Cas9을 개발하여 Nature Communications (2017)지에 발표했습니다.</p>
                    ` }] as post}
        <CardPlusItem {post} />
      {/each}
    </div>
  </Overview>
</Section>
<Section>
  <CardNews title="Related Contents" posts={[1, 1, 1, 1, 1]} />
</Section>
