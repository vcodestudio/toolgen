<script>
  import { twoDigits } from '$lib/utils.js'
  export let { index, name } = { index: 0, name: '' }
  export let open = false
</script>

<div class="p-6 accordion-b m:p-4" class:fill-bluegray={open}>
  <div class="flex items-start gap-6">
    <p class="fg-sub text16">{twoDigits(+index + 1)}</p>
    <div class="w-full">
      <a
        href="#"
        class="flex items-center block w-full bar"
        tabindex="0"
        role="button"
        on:click|preventDefault={() => {
          open = !open
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
      </a>
      {#if open}
        <div class="mt-6 cont">
          <slot />
        </div>
      {/if}
    </div>
  </div>
</div>
