<script>
  import { page } from '$app/stores'
  export let menus = []
</script>

<div class="flex gap-[3rem] m:scroll-x m:gap-[24px]">
  {#each menus as item}
    <a
      href={item.link}
      class=" whitespace-nowrap {$page.data.pathname.includes(item.link)
        ? 'text24-700 color-black'
        : 'text24-400 fg-sub'}"
    >
      {item.name}
    </a>
  {/each}
</div>
