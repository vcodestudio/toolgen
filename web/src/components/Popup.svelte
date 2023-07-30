<script>
  import { popup } from '$lib/screen'
  import Pagination from './Pagination.svelte'
  import Table from './Table.svelte'

  let upload
</script>

{#if $popup}
  <div
    class="overlay"
    class:backImg={['panel', 'form', 'db'].includes($popup.type)}
    class:mint={['db'].includes($popup.type)}
    tabindex="0"
    role="button"
    on:click|self={() => {
      popup.set(false)
    }}
    on:keydown|self={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        popup.set(false)
      }
    }}
  >
    <div class="panel items-center {$popup.type}">
      <a
        class="clean exit pc"
        href="/"
        on:click|preventDefault={() => {
          popup.set(false)
        }}
      >
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="36" height="36" rx="18" fill="white" fill-opacity="0.2" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6953 23.3619C12.4349 23.6223 12.4349 24.0444 12.6953 24.3047C12.9556 24.5651 13.3777 24.5651 13.6381 24.3047L18.5 19.4428L23.3619 24.3047C23.6223 24.5651 24.0444 24.5651 24.3047 24.3047C24.5651 24.0444 24.5651 23.6223 24.3047 23.3619L19.4428 18.5L24.3047 13.6381C24.5651 13.3777 24.5651 12.9556 24.3047 12.6953C24.0444 12.4349 23.6223 12.4349 23.3619 12.6953L18.5 17.5572L13.6381 12.6953C13.3777 12.4349 12.9556 12.4349 12.6953 12.6953C12.4349 12.9556 12.4349 13.3777 12.6953 13.6381L17.5572 18.5L12.6953 23.3619Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        class="clean exit mob"
        href="/"
        on:click|preventDefault={() => {
          popup.set(false)
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.5858 20.0001L10.293 28.293L11.7072 29.7072L20 21.4143L28.293 29.7073L29.7072 28.2931L21.4142 20.0001L29.7072 11.7072L28.293 10.293L20 18.5859L11.7072 10.2931L10.293 11.7073L18.5858 20.0001Z"
            fill="currentColor"
          />
        </svg>
      </a>
      {#if $popup.type == 'panel'}
        <div class="content">
          <div class="grid gap-4">
            <div class="grid gap-2">
              <h3 class="text24-700 color-blue">{$popup.data?.title}</h3>
              <p class="text14-400 fg-sub">{$popup.data?.desc}</p>
            </div>

            <div class="grid em:gap-4">
              {#if $popup.data?.content}
                {@html $popup.data?.content}
              {:else}
                <p>
                  <b>CMT1A 질병</b><br />
                  전세계에 100 만명 이상의 환자가 있는 CMT1A는 유전자 중복에 의해 PMP22 유전자가 과발현되고 이로 인해 말초신경(PNS)의
                  탈수초화 (dem-yelination)가 일어나 생기는 질병으로 다른 많은 유전병처럼 아직 근본적인 치료법이 없기 때문에
                  의료적 미충족수요가 높습니다.
                </p>
                <p>
                  <b>툴젠 TGT-001 프로그램</b><br />
                  TGT-001은 PMP22 유전자 중복에 의해 발생하는 유전질병인 CMT1A에 대한 유전자교정 치료 프로그램입니다. 툴젠은
                  유전자교정을 이용한 PMP22 유전자 발현 조절 기술을 바탕으로 CMT1A의 근본 원인을 교정하여 완치를 목표로 한
                  TGT-001을 개발하고 있으며, 현재 동물 실험을 통해 치료 전략에 대한 검증을 마쳤습니다.
                </p>
              {/if}
            </div>
          </div>
        </div>
      {:else if $popup.type == 'form'}
        <div class="content">
          <div class="grid gap-6">
            <div class="grid gap-1">
              <p class="text14-400 fg-sub">Interest in ToolGen's</p>
              <p class="text18-700">[Platform : Diagnosis (새로운 사업 확장 기회)]</p>
              <p>
                툴젠의 기능향상 CRISPR-Cas9및 안정성 평가 기술은 파트너사의 안정적인 CRISPR-Cas9의 활용을 통한 빠른 사업
                확장이 가능하도록 최선을 다하고 있습니다. 파트너쉽에 대해 문의주시면 자세히 설명드리겠습니다.
              </p>
            </div>
            <div class="grid gap-4">
              <div class="grid gap-2">
                <p class="text14-700">성명 <span class="fg-blue">*</span></p>
                <input type="text" />
              </div>
              <div class="grid gap-2">
                <p class="text14-700">단체명/기업명 <span class="fg-blue">*</span></p>
                <input type="text" />
              </div>
              <div class="grid gap-2">
                <p class="text14-700">이메일 <span class="fg-blue">*</span></p>
                <input type="text" />
              </div>
              <div class="grid gap-2">
                <p class="text14-700">연락처 <span class="text14-400 fg-sub">(선택)</span></p>
                <input type="text" />
              </div>
              <div class="grid gap-2">
                <p class="text14-700">문의사항 <span class="fg-blue">*</span></p>
                <textarea rows="5" />
              </div>
              <div>
                <button class="fill">보내기</button>
              </div>
            </div>
          </div>
        </div>
      {:else if $popup.type == 'db'}
        <div class="content">
          <div class="grid gap-6">
            <div class="grid gap-1">
              <p class="text14-400 fg-sub">Apply to ToolGen's</p>
              <p class="text18-700">인재 DB 등록</p>
              <p>
                해당 지원은 상시 채용을 위해 활용되며, 담당 부서에서 비정기적으로 검토하여 채용 포지션이 오픈시 서류
                합격자에 한해 개별적으로 연락드리게 됩니다.
              </p>
            </div>
            <div class="grid gap-4">
              <div class="grid gap-2">
                <p class="text14-700">성명 <span class="fg-blue">*</span></p>
                <input type="text" />
              </div>
              <div class="grid gap-2">
                <p class="text14-700">이메일 <span class="fg-blue">*</span></p>
                <input type="text" />
              </div>
              <div class="grid gap-2">
                <p class="text14-700">연락처 <span class="fg-blue">*</span></p>
                <input type="text" />
              </div>
              <div class="grid gap-2">
                <p class="text14-700">첨부자료 <span class="fg-blue">*</span></p>
                <input
                  type="file"
                  id="upload_"
                  bind:this={upload}
                  on:change={() => {
                    upload = upload
                  }}
                />
                <label for="upload_" class="cursor-pointer">
                  <div class="flex-auto">
                    {#if upload?.files?.length}
                      <span>
                        {upload.files[0].name}
                      </span>
                    {:else}
                      <span class="text-gray-400">
                        ex)입사지원서, 자기소개서, 포트폴리오, 학위증명서, 연구내용 (논문 및 특허)
                      </span>
                    {/if}
                  </div>
                  <svg class="block w-[1em] h-[1em]" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.3233 1.04716C7.20156 0.916032 7.02768 0.833984 6.83464 0.833984C6.83443 0.833984 6.83422 0.833984 6.83401 0.833985C6.66339 0.833977 6.49276 0.899064 6.36258 1.02925L3.02925 4.36258C2.7689 4.62293 2.7689 5.04504 3.02925 5.30539C3.2896 5.56574 3.71171 5.56574 3.97206 5.30539L6.16797 3.10948L6.16797 9.50065C6.16797 9.86884 6.46644 10.1673 6.83463 10.1673C7.20282 10.1673 7.5013 9.86884 7.5013 9.50065L7.5013 3.11078L9.69591 5.30539C9.95626 5.56574 10.3784 5.56574 10.6387 5.30539C10.8991 5.04504 10.8991 4.62293 10.6387 4.36258L7.3233 1.04716ZM0.833659 8.83253C1.20185 8.83253 1.50033 9.131 1.50033 9.49919V12.1659C1.50033 12.3427 1.57056 12.5122 1.69559 12.6373C1.82061 12.7623 1.99018 12.8325 2.16699 12.8325H11.5003C11.6771 12.8325 11.8467 12.7623 11.9717 12.6373C12.0968 12.5122 12.167 12.3427 12.167 12.1659V9.49919C12.167 9.131 12.4655 8.83253 12.8337 8.83253C13.2018 8.83253 13.5003 9.131 13.5003 9.49919V12.1659C13.5003 12.6963 13.2896 13.205 12.9145 13.5801C12.5395 13.9551 12.0308 14.1659 11.5003 14.1659H2.16699C1.63656 14.1659 1.12785 13.9551 0.752779 13.5801C0.377706 13.205 0.166992 12.6963 0.166992 12.1659V9.49919C0.166992 9.131 0.465469 8.83253 0.833659 8.83253Z"
                      fill="#888888"
                    />
                  </svg>
                </label>
              </div>
              <div>
                <button class="fill">보내기</button>
              </div>
            </div>
          </div>
        </div>
      {:else if $popup.type == 'profile'}
        <div class="fill-blue pop-profile flex text-white m:flex-col m:py-[60px] m:w-full m:max-w-full">
          <div class="thumb flex-[5] bg-white m:flex-none flex m:bg-transparent justify-center">
            <div class="bg-white">
              <img class="w-full h-full block object-cover m:h-[350px] m:w-auto" src="/images/people-2.png" />
            </div>
          </div>
          <div class="desc p-6 grid gap-6 flex-[6] m:flex-[1]">
            <div class="flex">
              <div>
                <p class="text16-700">이병화</p>
                <p class="text14-400 opacity-50">총괄</p>
              </div>
            </div>
            <div class="overflow-y-auto leading-7 h-[100%] max-h-[300px] m:max-h-full">
              <p class="body14-400">
                1991년 한국장기신용은행(국민은행과 합병)에 입사하여 2000년 ㈜마크로젠에 입사하기 전까지 은행에서 약
                10년간 기업여신 및 심사 등 다양한 금융업무를 경험하였습니다. 2000년 바이오 기업인 마크로젠에 합류하여
                자금, IR, 공시, 경영관리, 영업총괄 등 다양한 업무를 경험한 후 대표이사로서 경영을 총괄하였으며,
                2010년까지 마크로젠의 미국법인, 일본법인, 유럽지사 등을 설립하고 글로벌 유전자분석 비즈니스를
                전개함으로써 마크로젠이 세계적인 유전체분석 및 정밀의학회사로 성장하는 데 주도적으로 기여하였습니다.
                2011년부터는 ㈜엠지메드로 자리를 옮겨 대표이사를 역임하면서 분자진단 기술 개발 및 유전자칩을 이용한
                질병진단사업을 성공적으로 이끌고, 코스닥시장에 상장시킨 경험도 가지고 있습니다. 금융업에서의 10년,
                바이오업계에서 22년의 경험으로 바이오 산업에 대한 깊은 이해는 물론 기업의 재무관리, 리스크관리, 1991년
                한국장기신용은행(국민은행과 합병)에 입사하여 2000년 ㈜마크로젠에 입사하기 전까지 은행에서 약 10년간
                기업여신 및 심사 등 다양한 금융업무를 경험하였습니다. 2000년 바이오 기업인 마크로젠에 합류하여 자금, IR,
                공시, 경영관리, 영업총괄 등 다양한 업무를 경험한 후 대표이사로서 경영을 총괄하였으며, 2010년까지
                마크로젠의 미국법인, 일본법인, 유럽지사 등을 설립하고 글로벌 유전자분석 비즈니스를 전개함으로써
                마크로젠이 세계적인 유전체분석 및 정밀의학회사로 성장하는 데 주도적으로 기여하였습니다. 2011년부터는
                ㈜엠지메드로 자리를 옮겨 대표이사를 역임하면서 분자진단 기술 개발 및 유전자칩을 이용한 질병진단사업을
                성공적으로 이끌고, 코스닥시장에 상장시킨 경험도 가지고 있습니다. 금융업에서의 10년, 바이오업계에서
                22년의 경험으로 바이오 산업에 대한 깊은 이해는 물론 기업의 재무관리, 리스크관리,
              </p>
            </div>
          </div>
        </div>
      {:else if $popup.type == 'pct'}
        <div class="content w-[1080px]">
          <div class="grid gap-4">
            <h4>CRISPR-Cas9 응용특허 PCT 출원 리스트</h4>
            <Table
              data={[
                ['국가', '출원번호', '출원일', '현황'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
                ['한국', 'BR1120150008708-6', '2023.01.06', '출원'],
              ]}
            />
            <Pagination />
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}
