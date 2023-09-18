<script>
  import { popup } from '$lib/screen'
  import { onMount } from 'svelte'
  export let data = []
  let licenses = []
  onMount(() => {
    licenses = [...data].map(a => {
      a.open = false
      a.childs = a.childs?.split(',').map(a => ({ name: a.trim() })) ?? []
      return a
    })
  })
</script>

<div class="accordion-a">
  {#each licenses as item, i}
    {#if item}
      <div class="grid w-full item gap-1px">
        <a
          href="./"
          class="flex items-center w-full gap-4 bar text18-700"
          role="button"
          tabindex="0"
          on:click|preventDefault={() => {
            // all close
            if (!item.open) {
              licenses = licenses.map(a => {
                a.open = false
                return a
              })
            }
            item.childs?.length
              ? (item.open = !item.open)
              : popup.set({
                  type: 'form',
                  data: {
                    title: item.name,
                    content: item.content,
                  },
                })
          }}
        >
          <span class="flex-auto">
            {item.name}
          </span>
          <div>
            {#if item.childs?.length}
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
          <div class="grid buttons gap-1px">
            {#each item.childs as child}
              <a
                href="#"
                on:click|preventDefault={() => {
                  popup.set({ type: 'form', data: { title: `${item.name} : ${child.name}`, content: item.content } })
                }}
                class="flex items-center block w-full gap-4 bar"
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
    {/if}
  {/each}
</div>
