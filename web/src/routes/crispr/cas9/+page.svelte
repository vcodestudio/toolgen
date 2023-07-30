<script>
  import Section from '../../../components/Section.svelte'
  import DownloadButton from '../../../components/DownloadButton.svelte'
</script>

<Section>
  <div class="grid gap-20">
    <div class="flex flex-col gap-6">
      <h2>CRISPR-Cas9</h2>
      <p>
        CRISPR(Clustered Regular Interspaced Short Palindromic Repeats)는 2006년 ZFN(Zinc Finger), 2011년
        TALEN(Transcription Activator-Like Effector Nucleases)에 이어 2012년 개발된 혁명적인 유전자 편집 기술이며, 기존
        유전자 편집 기술들과 비교하여 수많은 장점으로 인해 전 세계 연구자들과 과학자들에 의해 사용되고 있다.
      </p>
      <DownloadButton title="PDF 다운로드" />
      <img class="block" src="/images/static/frame-9977.jpg" alt=".." />
    </div>
  </div></Section
>
<hr class="w-limit" />
<Section>
  <div class="flex flex-col gap-8">
    <h3>Benefit of CRISPR</h3>
    <div class="grid grid-cols-2 gap-8 m:grid-cols-1">
      <div class="grid gap-2">
        <div class="w-4 border-t-2 border-emerald-400" />
        <p class="text18-700">Convenience</p>
        <p class="text16-400">
          ZFN 및 TALEN에 비해 CRISPR의 가장 큰 장점은 사용 편의성이다. 개별 유전자별로 맞춤 설계된 단백질이 필요한
          ZFN이나 TALEN과 달리 CRISPR는 특정 유전자를 표적으로 쉽게 조작할 수 있는 RNA 분자와 Cas9 단백질을 사용한다.
          ZFN과 TALEN에 필요한 단백질을 설계하고 생산하는 과정이 어렵고 복잡한데 비해, CRISPR 시스템은 연구자들이 훨씬
          더 접근하기 쉽고 단순하다.
        </p>
      </div>
      <div class="grid gap-2">
        <div class="w-4 border-t-2 border-emerald-400" />
        <p class="text18-700">Efficiency</p>
        <p class="text16-400">
          CRISPR는 또한 ZFN 및 TALEN보다 훨씬 빠르고 효율적인 것으로 입증되었다. 유전자를 편집하기 위해 CRISPR를
          사용하는 과정은 몇 주 만에 완료될 수 있지만, ZFN과 TALEN은 필요한 단백질을 생성하고 편집 과정을 완료하는 데
          수개월 또는 심지어 수년이 걸릴 수 있다. 이러한 속도와 효율성 덕분에 CRISPR는 수많은 연구자에게 사용되며
          생명공학 분야의 더 빠른 진전을 위한 길을 열었다.
        </p>
      </div>
    </div>
    <hr />
    <p>
      이렇듯 CRISPR는 사용의 용이성, 속도 및 효율성으로 인해 대중적인 유전자 편집 기술이 되었다. ZFN 및 TALEN에 비해
      CRISPR는 유전자를 편집하는데 더 접근하기 쉽고 정확하며 효과적인 방법임이 입증되어 생명공학 분야의 연구 및 개발에
      새로운 길을 열었다. 툴젠은 이러한 이점을 지닌 CRISPR 기술을 다양한 분야에 적용하여 사업화해 나가고 있다.
    </p>
    <hr />
    <img class="block" src="/images/group-34.jpg" alt=".." />
  </div>
</Section>
<hr class="w-limit" />
<Section>
  <div class="grid gap-6">
    <h3 class="m:text24-700">Extended Research</h3>
    <p>
      CRISPR-Cas9 기술이 유전자 편집 분야에서 유례없는 성공을 거두면서 후속 연구들을 통해 Base editor 및 Prime editor를
      포함한 수많은 새로운 CRISPR 기반 도구가 등장하였다. 이러한 도구들은 각각 Cas9을 기반으로 한 응용 도구로서 목적에
      따라 유전자 편집을 훨씬 용이하게 할 수 있다. Cas9 기반 도구이므로 CRISPR-Cas9 원천특허가 중요시되며 툴젠은 다양한
      원천기술에 대한 확장을 위해 다양한 연구개발 활동이 진행 중이다.
    </p>
    <p>
      Cpf1 및 Sp. Cas9외의 Cas기반 유전자 편집 tool은 모두 Sp. Cas9에 비해 작동하는 타겟의 개수도 적고 효율도 대부분
      낮은 것으로 나타났다. 많은 타겟 개수와 높은 효율로 인한 부작용으로 Sp. Cas9은 이러한 새로운 도구들에 비해 높은
      비표적 편집 효율(off-target effect)을 보인다는 단점이 있어 왔다. 최근 툴젠은 이러한 한계를 극복하여 높은 효율은
      유지하면서 비표적 편집 효율은 획기적으로 감소시킨 변이 Sp. Cas9인 Sniper2L을 개발하여 이러한 단점을 해결하고 있다.
    </p>
    <img class="block" src="/images/test-4.jpg" alt=".." />
    <p>
      Sp. Cas9는 Base-editor와 Prime-editor와 같은 새로운 도구들의 구성 요소로서 핵심적인 역할을 수행할 뿐만 아니라 더
      다양한 역할을 수행할 수 있다. 예를 들어 Base-editor나 Prime-editor는 특정 DNA 염기를 변경하는 데 매우 효과적일 수
      있지만, 적용 범위가 제한적이다. 반면 Sp. Cas9는 유전자 Knock-out, Knock-in, Large deletion, CRISPRi, CRISPRa등
      광범위한 작업들에 활용될 수 있다. 또한 Sp. Cas9는 Cpf1에 비해 타겟팅 시퀀스의 범위가 넓다. Cpf1의 경우 TTTV의
      PAM(protosacer adjacent motif) 서열을 가지는데 이로 인해 NGG의 PAM 서열을 가진 Sp. Cas9에 비해 목표 시퀀스의
      범위가 훨씬 더 제한적이다. 게다가 Sp. Cas9는 새로운 툴들과 비교했을 때 가장 심도 있게 연구되었다. Sp. Cas9의 작용
      메커니즘, 부작용 및 다양한 delivery tool들을 적용했을 때의 효율의 차이 등 다양한 분야에서 방대한 양의 연구 문헌이
      출판되었다.
    </p>
    <p>
      결국, Cpf1, Base-editor, Prime-editor 같은 CRISPR 유전자 교정 도구는 지속적으로 개발되고 있으나 높은 효능, 다양한
      application, 넓은 타겟팅 시퀀스 및 광범위한 문헌으로 인해 Cas9은 유전자 편집을 위한 강력하고 다재 다능한
      도구로서의 압도적인 우위를 유지 중이다. 유전자 편집 분야가 계속 진화함에 따라 새로운 도구가 등장할 것으로 보이지만
      Sp. Cas9의 입증된 효능과 다재 다능성은 앞으로 수년간 유전자 편집 연구의 최전선을 유지할 것으로 보인다.
    </p>
  </div>
</Section>
