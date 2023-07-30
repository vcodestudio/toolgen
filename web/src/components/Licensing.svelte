<script>
  import { popup } from '$lib/screen'
  const licenses = [
    {
      name: 'CRISPR Foundation Patents',
      childs: [],
    },
    {
      name: 'Platform',
      childs: [
        { name: 'Improved Cas9 (유전자가위 고도화)' },
        { name: 'CRISPR Safety Evaluation (유전자 가위 안전성 평가기술)' },
        { name: 'Diagnosis (새로운 사업 확장 기회)' },
      ],
    },
    {
      name: 'Therapeutics',
      childs: [
        { name: 'TGT-001 | Charcot-Marie-Tooth Disease' },
        { name: 'TGT-101 | Age-related Macular Degeneration' },
        { name: 'TG-LBP | Hemophilia B' },
        { name: 'TG-LBP | Hemophilia B' },
        { name: 'Next-generation CAR-T' },
        { name: 'CREAM' },
      ],
    },
    {
      name: 'Crops',
      childs: [
        { name: '고함량올레산대두' },
        { name: '갈변억제감자' },
        { name: '제초제내성옥수수' },
        { name: '제초제내성대두' },
        { name: '아크릴아마이드억제감자' },
        { name: '솔라닌독성억제감자' },
        { name: '기능성대두' },
        { name: '건조내성고추' },
        { name: '독성억제담배' },
        { name: '병저항성배추' },
      ],
    },
    {
      name: 'Etc.',
      childs: [],
    },
  ]
  licenses.map(a => {
    a.open = false
  })
</script>

<div class="accordion-a">
  {#each licenses as item, i}
    <div class="item w-full grid gap-1px">
      <a
        href="./"
        class="bar text18-700 w-full items-center flex gap-4"
        role="button"
        tabindex="0"
        on:click|preventDefault={() => {
          // all close
          licenses.map(a => {
            a.open = false
          })
          item.childs.length ? (item.open = !item.open) : popup.set({ type: 'form' })
        }}
      >
        <span class="flex-auto">
          {item.name}
        </span>
        <div>
          {#if item.childs.length}
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.66699 3.83333C8.66699 3.46514 8.36852 3.16667 8.00033 3.16667C7.63214 3.16667 7.33366 3.46514 7.33366 3.83333V7.83333H3.33366C2.96547 7.83333 2.66699 8.13181 2.66699 8.5C2.66699 8.86819 2.96547 9.16667 3.33366 9.16667H7.33366V13.1667C7.33366 13.5349 7.63214 13.8333 8.00033 13.8333C8.36852 13.8333 8.66699 13.5349 8.66699 13.1667V9.16667H12.667C13.0352 9.16667 13.3337 8.86819 13.3337 8.5C13.3337 8.13181 13.0352 7.83333 12.667 7.83333H8.66699V3.83333Z"
                fill="white"
              />
            </svg>
          {:else}
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3905 7.83333L7.52856 2.97137L8.47137 2.02856L14.9428 8.49997L8.47137 14.9714L7.52856 14.0286L12.3905 9.16667H2V7.83333H12.3905Z"
                fill="white"
              />
            </svg>
          {/if}
        </div>
      </a>
      {#if item.open && item.childs.length}
        <div class="buttons grid gap-1px">
          {#each item.childs as child}
            <a
              href="#"
              on:click|preventDefault={() => {
                popup.set({ type: 'form' })
              }}
              class="bar block w-full items-center flex gap-4"
            >
              <span>
                {child.name}
              </span>
              <div>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3905 7.83333L7.52856 2.97137L8.47137 2.02856L14.9428 8.49997L8.47137 14.9714L7.52856 14.0286L12.3905 9.16667H2V7.83333H12.3905Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</div>
