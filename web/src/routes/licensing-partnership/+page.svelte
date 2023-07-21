<script>
  import Licensing from '../../components/Licensing.svelte'
  import PageMarginTop from '../../components/PageMarginTop.svelte'
  import Section from '../../components/Section.svelte'
  import SectionImg from '../../components/SectionImg.svelte'
  import BottomBanner from '../../components/BottomBanner.svelte'
  import AccordionItem from '../../components/AccordionItem.svelte'

  let faqs = [
    {
      title:
        'CRISPR-Cas9 을 이용하여 치료제/신약, 식물체/종자, 동물, 연구도구, 세포주/모델동물 등을 개발한 다음 미국에서 사업을 하려고 합니다. 툴젠으로부터 특허 라이선스를 받는 것만으로 특허 침해 이슈 없이 사업이 가능한가요?',
      content: `현재 미국에서 툴젠은 CVC 그룹과, Broad연구소를 상대로 CRISPR-Cas9 특허 최초 발명자로 인정받기 위한 저촉심사(interference) 절차를 진행하고 있습니다. 그러므로, 저촉심사 절차가 종료되어 특허 소유자가 최종 결정되기 전까지는 미국 CRISPR-Cas9 특허는 툴젠의 단독 소유라고 단정하기 어렵습니다. 다만 툴젠은 저촉심사 절차에서 경쟁자인 CVC 그룹이나 Broad연구소에 비해 우월한 senior party의 지위를 인정 받았으므로, 현재 경쟁자들 대비 매우 유리한 위치에 있습니다.`,
    },
    {
      title:
        'CRISPR-Cas9를 진핵세포에 적용하는 특허에 대해 미국에서는 저촉심사(interference)가 진행되고 있는데, 저촉심사는 무엇을 의미하나요?',
      content: `미국의 저촉심사(Interference)는 미국의 특허법 개정 이전(즉, 2013년 3월 이전)에 유효했던 심사 제도로, 선발명주의 하에서 동일한 발명에 복수의 출원이 존재하는 경우 최초의 발명자에게 특허권을 부여하는 제도입니다. 반면, 선출원주의 제도 하에서는 하나의 동일한 발명에 대하여 복수의 출원이 있을 경우 그 발명을 한 시점의 선후를 문제 삼지 않고 출원한 시점의 선후만을 비교하여 먼저 특허 출원을 한 자에게 특허권을 부여하는 제도입니다. 미국의 선발명주의는 툴젠의 CRISPR 원천특허가 출원된 2012년 당시에 미국에만 존재하던, 특허권 부여 요건에 대한 미국 특유의 기준이었습니다.`,
    },
    {
      title: '저촉심사 절차는 어떻게 됩니까?',
      content: `
    <p>
        저촉심사는 미국 특허심판원(Patent Trial and Appeal Board, ‘PTAB’)에서 시작됩니다. PTAB의 저촉심사는 2단계 절차로 진행됩니다. 1단계(motion phase)에서는 저촉심사의 대상인 복수의 발명이 동일한지 여부 및 선출원자가 누구인지 여부를 판단합니다. 1단계에서 발명이 서로 동일하지 않다고 판단하면, PTAB은 발명이 서로 저촉되지 않는다(no interference in fact)고 결정하고 저촉심사를 종결합니다. 반면 1단계에서 발명이 서로 동일하고 선출원인(Senior party)와 후출원인(Junior party)가 누구인지 확정되면, 복수의 출원인 중 선발명자가 누구인가를 판단하는 2단계(priority phase) 절차가 진행됩니다. 2단계 절차에서는 1단계에서 후출원인으로 확정된 Junior party가 선발명자임을 주장하는 청원(motion)을 먼저 제출합니다. 이후, 선출원인으로 확정된 Senior party가 이에 대응하여 선발명을 주장합니다. PTAB은 당사자들의 주장 및 증거를 고려하여 선발명자가 누구인지 결정합니다.
    </p>
    `,
    },
    {
      title: '미국의 저촉심사 결과가 툴젠 특허를 라이센스 받은 기업에는 어떤 영향이 있나요?',
      content: `
    <p>
        저촉심사 절차가 종료되고 최종 소유권자가 확정될 때까지 툴젠의 특허 라이선시들은 영향을 받지 않습니다. 저촉심사가 종료되면 그 결과에 따라 툴젠 라이선시뿐만 아니라, 경쟁자들의 라이선시 또한 새로운 법률관계를 형성해야 될 수도 있습니다.연구단계에 따른 라이센스 정책을 펼치고 있습니다.
        </p>
    `,
    },
    {
      title: '툴젠 특허를 라이센스 받은 기업은 저촉심사가 끝날 때까지 미국에서는 사업이 불가능한가요?',
      content: `<p>
        아닙니다. 현재 CRISPR-Cas9 특허에 대한 저촉심사가 진행 중임에도 불구하고 다수의 툴젠 라이선시들이 미국에서 정상적으로 사업을 영위하고 있습니다. 특히 툴젠은 저촉심사에서 Senior Party 지위를 인정받았으므로, 저촉심사 절차에서 유리한 위치를 차지하고 있습니다.
        </p>`,
    },
    {
      title: '미국의 특허 저촉심사 결과가 다른 나라의 툴젠 특허에도 영향을 미치나요?',
      content: `
    <p>
        특허권은 국가마다 독립적으로 발생하고 소멸합니다. 툴젠 미국 특허의 저촉심사 결과는 타국 특허에 영향을 주지 않습니다. CRISPR-Cas9을 진핵세포에 적용하는 툴젠의 원천특허는 가장 빠른 출원일을 갖고 있으며, 미국을 제외한 다른 국가에서는 선출원주의를 채택하여, 가장 먼저 출원한 특허에 권리를 부여하므로 오히려 미국을 제외한 다른 국가에서 툴젠 특허의 지위는 높습니다.
        </p>
    `,
    },
    {
      title: '상업화하기 전 연구 단계에서도 툴젠의 특허를 라이센스 받아야 하나요?',
      content: `
    <p>예, 그렇습니다. 연구 목적이 아닌 상업화 목적의 개발인 경우 특허 라이센스를 받아야 합니다. 툴젠은 CRISPR-Cas9 연구자들이 부담되지 않도록 연구단계에 따른 라이센스 정책을 펼치고 있습니다.</p>
    `,
    },
    {
      title: '툴젠 특허를 라이선스 받는데 필요한 비용은 얼마입니까?',
      content: `
    <p>여러가지 factor들이 고려됩니다. 공정 과정에서 CRISPR-Cas9의 중요도, 개발 물질은 마켓 크기 등 여러가지를 고려해서 책정하게 됩니다.</p>
    `,
    },
    {
      title: '툴젠 특허를 라이선스 받게 되면, 배타적으로 사용하고 싶습니다. 전용실시권을 받을 수 있나요?',
      content: `<p>
        당사는 일반적으로 파트너사에 통상실시권을 허여함으로써, 최대한 많은 고객이 CRISPR-Cas9 기술을 사업에 적용할 수 있도록 지원하고 있습니다. 전용실시권이 필요한 경우에는 툴젠의 사업개발실 (BD@toolgen.com)에 문의주시기 바랍니다.
        </p>
        `,
    },
    {
      title: '툴젠의 CRISPR-Cas9 특허를 라이센스 받는 경우, 기술적인 도움도 같이 받을 수 있나요?',
      content: `
    <p>파트너사와의 라이선스 계약에 따른 당사의 기술지원 업무 범위는 적용 분야 및 계약 조건 등에 따라 달라집니다만, 당사는 CRISPR-Cas9 기술이 생소한 파트너사를 위하여, 기술적 어려움이 없도록 최대한 지원하고 있습니다. 아울러, 툴젠은 기술지원 뿐만 아니라, 파트너사와의 공동 연구를 통한 상생 및 동반성장을 도모하고자 합니다.</p>
    `,
    },
    {
      title: '툴젠의 특허가 영향을 미치는 지역은 어디인가요?',
      content: `
    <p>
        툴젠의 특허는 세계 주요 국가에 등록 및 출원되어 있습니다.
        </p>
    `,
    },
  ]
</script>

<PageMarginTop />
<Section>
  <div class="grid gap-6">
    <h1>Licensing</h1>
    <SectionImg src="/images/licensing/1.png" />
  </div>
</Section>
<Section>
  <div class="grid gap-4">
    <h3>Stronger Together</h3>
    <p>
      툴젠은 CRISPR 유전자가위 원천기술을 다양한 분야에 라이센싱하여 함께 성장하고자 합니다. CRISPR/Cas9 원천 특허권자인
      툴젠은 전략적인 특허 관리 및 활용을 위해 국내외 변호사/변리사 및 특허 전문가 그리고 라이센싱 전문가로 구성된
      IP사업본부를 운영하고 있습니다.
    </p>
  </div>
</Section>
<Section class_="fill-navy text-white">
  <div class="grid grid-cols-2 gap-6 phone:grid-cols-1">
    <div class=" flex flex-col gap-6">
      <h3>라이센싱 문의</h3>
      <p>
        툴젠의 CRISPR 유전자가위 특허 라이센싱과 관련하여 문의가 있으신 경우, 분야를 선택하신 후 양식을 채워주시면
        담당자가 연락드리겠습니다.
      </p>
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
              <div class="flex gap-4 items-center p-4 rounded-md fill-light-blue">
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
      {#each faqs as item, idx}
        <AccordionItem index={idx + 1} name={item.title}>
          {@html item.content}
        </AccordionItem>
      {/each}
    </div>
  </div>
</Section>
<BottomBanner />
