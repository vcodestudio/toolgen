<script>
  import { twoDigits } from '$lib/utils.js'
  export let { index, name } = { index: 0, name: '' }
  export let open = false
</script>

<div class="accordion-b p-6 m:p-4">
  <div class="flex gap-6 items-start">
    <p class="fg-sub text16">{twoDigits(+index + 1)}</p>
    <div class="w-full">
      <div
        class="bar flex w-full items-center"
        tabindex="0"
        role="button"
        on:click={() => {
          open = !open
        }}
        on:keydown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            open = !open
          }
        }}
      >
        <span class="flex-auto pc:text16-700">
          {name}
        </span>
        <div class="text16">
          <svg
            class="block w-[1.5em] h-[1.5em]"
            class:rotate-180={open}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 15.2024L19.6888 7L21 8.39879L12 18L3 8.39879L4.3112 7L12 15.2024Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      {#if open}
        <div class="cont mt-6">
          <slot />
        </div>
      {/if}
    </div>
  </div>
</div>
