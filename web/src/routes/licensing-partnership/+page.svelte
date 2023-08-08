<script>
  import Licensing from '../../components/Licensing.svelte'
  import PageMarginTop from '../../components/PageMarginTop.svelte'
  import Section from '../../components/Section.svelte'
  import SectionImg from '../../components/SectionImg.svelte'
  import BottomBanner from '../../components/BottomBanner.svelte'
  import AccordionItem from '../../components/AccordionItem.svelte'

  export let data
  $: posts = data.page
</script>

<PageMarginTop />
<Section>
  <div class="flex flex-col gap-8">
    <div class="grid gap-4">
      <h3>{posts[0].title}</h3>
      {@html posts[0].content.html}
    </div>
    <SectionImg src="/images/licensing/1.png" />
  </div>
</Section>
<Section class_="fill-navy text-white">
  <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
    <div class="flex flex-col gap-6">
      <h3>{posts[1].title}</h3>
      {@html posts[1].content.html}
    </div>
    <div>
      <Licensing />
    </div>
  </div>
</Section>
<Section>
  <div class="grid gap-6">
    <h3>FAQ</h3>
    <div class="grid gap-6 m:gap-4">
      <AccordionItem index="0" name="CRISPR-Cas9을 이용한 유전자 교정 기술을 사용하면, 툴젠 특허를 침해하나요?">
        <div class="grid gap-4">
          <p>
            툴젠은 CRISPR-Cas9을 진핵세포에 적용하는 원천기술을 보유하고 이에 대한 특허를 보유하고 있습니다. 또한,
            CRISPR-Cas9의 작용을 정교화 하거나 응용한 기술의 특허들도 보유하고 있습니다. 관련하여 툴젠은 전세계 주요국에
            200여건의 특허 출원을 보유하고 있고, 84건의 등록특허를 보유하고 있습니다. CRISPR-Cas9를 이용한 치료제/신약,
            식물체/종자, 동물, 연구도구, 세포주/모델동물 등을 개발하여 상업화하는 기업 그리고, CROs/CMOs 업체 등이 툴젠
            특허의 라이선스가 필요합니다
          </p>
          <div class="grid grid-cols-2 gap-4 gap-y-6">
            {#each [{ img: '/images/faq-a-1.png', title: '치료제/신약', eng: 'Therapeutics and Drugs' }, { img: '/images/faq-a-2.png', title: '식물체/종자', eng: 'Plants and seeds' }, { img: '/images/faq-a-3.png', title: '동물', eng: 'Animal' }, { img: '/images/faq-a-4.png', title: '연구 도구', eng: 'Research Tools' }, { img: '/images/faq-a-5.png', title: '세포주/모델동물', eng: 'Cell lines / Animal Models' }, { img: '/images/faq-a-6.png', title: 'CROs/CMOs', eng: 'CROs / CMOs, etc.' }] as item}
              <div class="flex items-center gap-4 p-4 rounded-md fill-light-blue">
                <img class="block text-[64px] w-[1em] h-[1em]" src={item.img} />
                <div class="flex flex-col gap-0">
                  <p class="text16-700">{item.title}</p>
                  <p>{item.eng}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </AccordionItem>
      {#each posts[2].item.slice(1) as item, idx}
        <AccordionItem index={idx + 1} name={item.title}>
          {@html item.content}
          {#if item.button_name && item.button_link}
            <div>
              <br />
              <a href={item.button_link} class="font-medium button clean">
                <span class="text-[1rem] font-bold color-navy">
                  {item.button_name}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.1353 8L4.66699 2.87413L5.59952 2L12.0003 8L5.59952 14L4.66699 13.1259L10.1353 8Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          {/if}
        </AccordionItem>
      {/each}
    </div>
  </div>
</Section>
