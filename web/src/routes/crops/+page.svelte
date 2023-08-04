<script>
  import Banner from '/src/components/Banner.svelte'
  import DownloadButton from '../../components/DownloadButton.svelte'
  import Section from '../../components/Section.svelte'
  import Overview from '../../components/Overview.svelte'
  import CardNews from '../../components/CardNews.svelte'
  import SectionImg from '../../components/SectionImg.svelte'
  import Pipline from '../../components/Pipline.svelte'
  import MobileHeaderW from '../../components/MobileHeaderW.svelte'

  export let data
  $: posts = data.page
</script>

<MobileHeaderW />
<Banner src="/images/static/b4b8583d84c9aa2eeb0b578195389086.jpg">
  <h1>Crops</h1>
  <p class="max-w-[650px] em:leading-7">
    {posts[0].content.text}
  </p>
  <div class="flex-auto" />
  <div>
    <DownloadButton href="/" title="PDF 다운로드" />
  </div>
</Banner>
<Section>
  <Overview>
    {@html posts[1].content.html}
  </Overview>
</Section>
<Section class_="fill-sub">
  <div class="grid gap-20 gap m:gap-4">
    <div class="flex gap-20 m:flex-col m:gap-4">
      <div class="flex items-center leading-[1em]">
        <h3 class="flex-auto">Pipeline</h3>
        <div class="flex-none h-[20px] mob">
          <svg class="w-auto h-full" viewBox="0 0 53 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.19336 5.46995L7.72861 11.0002L2.19336 16.5304L3.1373 17.4735L9.14453 11.4717C9.40519 11.2113 9.40519 10.7891 9.14453 10.5286L3.1373 4.52686L2.19336 5.46995ZM6.86003 5.46995L12.3953 11.0002L6.86003 16.5304L7.80397 17.4735L13.8112 11.4717C14.0719 11.2113 14.0719 10.7891 13.8112 10.5286L7.80397 4.52686L6.86003 5.46995Z"
              fill="#337DD9"
            />
            <path
              d="M25.068 11.012C24.914 10.396 24.438 9.99 23.556 9.976C22.646 9.99 22.002 10.48 21.988 11.096C22.002 11.586 22.394 11.922 23.276 12.132L24.368 12.412C25.698 12.734 26.356 13.392 26.356 14.428C26.356 15.702 25.306 16.654 23.444 16.668C21.778 16.654 20.784 15.912 20.588 14.568H21.82C21.96 15.282 22.478 15.632 23.416 15.632C24.48 15.632 25.138 15.184 25.152 14.484C25.138 13.966 24.76 13.616 23.92 13.42L22.8 13.168C21.512 12.86 20.826 12.16 20.812 11.152C20.826 9.892 21.932 8.982 23.556 8.968C25.11 8.982 26.076 9.794 26.216 11.012H25.068ZM30.7213 16.668C28.6213 16.654 27.3333 15.044 27.3333 12.832C27.3333 10.564 28.6773 8.982 30.6933 8.968C32.2753 8.982 33.4653 9.92 33.6613 11.32H32.4853C32.3033 10.634 31.7153 10.018 30.7213 10.032C29.3913 10.018 28.5093 11.11 28.5093 12.776C28.5093 14.498 29.3773 15.604 30.7213 15.604C31.6033 15.604 32.2613 15.128 32.4853 14.316H33.6613C33.4653 15.646 32.3733 16.654 30.7213 16.668ZM34.8931 16.5V9.08H36.0411V10.2H36.1251C36.3911 9.458 37.1751 8.954 38.0571 8.968C38.2251 8.954 38.5191 8.968 38.6451 8.968V10.172C38.5751 10.144 38.2531 10.088 37.9451 10.088C36.8811 10.088 36.0831 10.83 36.0971 11.824V16.5H34.8931ZM42.4072 16.668C40.3912 16.654 39.0192 15.128 39.0192 12.832C39.0192 10.508 40.3912 8.982 42.4072 8.968C44.4233 8.982 45.7813 10.508 45.7673 12.832C45.7813 15.128 44.4233 16.654 42.4072 16.668ZM40.1952 12.832C40.1952 14.302 40.8952 15.604 42.4072 15.604C43.9053 15.604 44.6052 14.302 44.5913 12.832C44.6052 11.348 43.9053 10.018 42.4072 10.032C40.8952 10.018 40.1952 11.348 40.1952 12.832ZM48.2889 6.588V16.5H47.0849V6.588H48.2889ZM51.1378 6.588V16.5H49.9338V6.588H51.1378Z"
              fill="#337DD9"
            />
          </svg>
        </div>
      </div>
      <p>
        {posts[2].content.text}
      </p>
    </div>
    <Pipline
      items={[
        {
          title: '고함량올레산대두',
          progress: 30,
          desc: 'High-content oleic acid soybeans',
          content: `
        콩 지방산중의 하나인 올레산이 다른 지방산으로 변화되지 않게끔 해당 유전자를 교정함으로서 콩내 올레산 함량을 80% 이상 함유하는 콩을 개발하였습니다. 이는 올리브오일내의 올레산 함량 보다 높으며 재배 지역에 관계없이 올레산 고함량이 일정하다는 것을 확인하였고 2020년 미국 USDA-APHIS의 "Am I regulated?" 제도하에서 GMO규제면제를 승인받았습니다.
        `,
        },
        {
          title: '갈변억제감자',
          desc: 'Browning-suppressed potato',
          progress: 40,
          content: `
        감자의 껍질을 없앨 경우 생기는 갈변현상을 일으키는 유전자를 교정하여 갈변억제 감자를 개발하였습니다. 한국 특허는 등록이 되었고 PCT 특허도 제출한 상태이며 또한 2022년 USDA-APHIS의 Secure Rule 제도하에서 GMO 규제면제를 승인받았습니다.
        `,
        },
        { title: '제초제내성옥수수', progress: 20 },
        { title: '제초제내성대두', progress: 50 },
        { title: '아크릴아마이드억제감자', progress: 70 },
        { title: '솔라닌독성억제감자', progress: 10 },
        { title: '기능성대두', progress: 30 },
        { title: '건조내성고추', progress: 90 },
        { title: '독성억제담배', progress: 20 },
        { title: '병저항성배추', progress: 10 },
      ]}
    />
  </div>
</Section>
<!-- <Section>
  <CardNews title="Related Contents" posts={[1, 1]} />
</Section> -->
