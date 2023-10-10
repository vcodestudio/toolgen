<script>
  import Licensing from '$lib/components/Licensing.svelte'
  import PageMarginTop from '$lib/components/PageMarginTop.svelte'
  import Section from '$lib/components/Section.svelte'
  import SectionImg from '$lib/components/SectionImg.svelte'
  import BottomBanner from '$lib/components/BottomBanner.svelte'
  import AccordionItem from '$lib/components/AccordionItem.svelte'
  import { onMount } from 'svelte'

  export let data
  export let form

  // $: console.log(form);

  $: posts = data.page

  $: licenses = posts[2]?.item
</script>

<PageMarginTop />
<Section>
  <div class="flex flex-col gap-8">
    <div class="grid gap-4">
      <h3>{posts[0]?.title}</h3>
      {@html posts[0]?.content?.html}
    </div>
    <SectionImg src="/images/licensing/1.png" />
  </div>
</Section>
<Section class_="fill-navy text-white">
  <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
    <div class="flex flex-col gap-6">
      <h3>{posts[1]?.title}</h3>
      {@html posts[1]?.content?.html}
    </div>
    <div>
      {#if licenses}
        <Licensing data={licenses} />
      {/if}
    </div>
  </div>
</Section>
<Section>
  <div class="grid gap-6">
    <h3>FAQ</h3>
    <div class="grid gap-6 m:gap-4">
      {#if posts[3]?.item[0]}
        <AccordionItem index="0" name={posts[3].item[0].title}>
          <div class="grid gap-4">
            <p>
              {@html posts[3].item[0].content}
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
      {/if}
      {#each posts[3]?.item?.slice(1) ?? [] as item, idx}
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
