<script>
  import { popup } from '$lib/screen'
  export let items = []
  export let title = ''
  export let progress = [
    'Program(Disease)',
    'Modeling',
    'In vitro',
    'In vivo',
    'Lead Optimization',
    'Pre-Clinical',
    'IND',
    'Phase 1',
  ]
</script>

<div class="grid gap-6">
  {#if title}
    <p class="fg-sub">{title}</p>
  {/if}
  <div class="grid gap-20">
    <div class="grid gap-10 m:scroll-x">
      {#each items as item, idx}
        <div class="grid gap-4 pipline-item">
          <div class="flex items-center w-full gap-4">
            <h4 class="single-line">{item.title}</h4>
            <p class="text12-400 fg-sub single-line">{item.desc ?? ''}</p>
            {#if item.content}
              <div class="flex justify-end flex-auto">
                <button
                  class="small lblue"
                  on:click={() => {
                    popup.set({ type: 'panel', data: item })
                  }}
                >
                  더보기
                </button>
              </div>
            {/if}
          </div>
          <div class="grid gap-1">
            <div class="progress">
              <div class="progress-bar" style="width: {item.progress}%" />
            </div>
            <div class="flex">
              {#each progress as item}
                <p class="flex-1 px-1 border-l-2 border-t-gray-400 text10-400 fg-sub">{item}</p>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
