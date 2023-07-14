<script>
    export let menus = [];
</script>
<div class="flex gap-[3rem]">
    {#each menus as item}
    <a href={item.link} class={item.selected?"text24-700 color-black":"text24-400 fg-sub"}>
        {item.name}
    </a>
    {/each}
</div>