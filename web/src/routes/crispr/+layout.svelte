<script>
    import PageMarginTop from "/src/components/PageMarginTop.svelte"
    import Section from "/src/components/Section.svelte"
    import SubMenus from "/src/components/SubMenus.svelte"
    import {page} from "$app/stores";

    let menus = [
        {selected:false, name:"CRISPR-Cas9 Foundational Patent", link:"/crispr"},
        {selected:false, name:"저촉심사", link:"/crispr/test"},
        {selected:false, name:"CRISPR-Cas9", link:"/crispr/cas9"},
    ];

    function ru(a) {
        menus.forEach(b=>b.selected=false);
        menus.find(b=>b.link==a.route.id).selected=true;
        menus = menus;
    }

    $: ru($page);
</script>
<svelte:head>
    <title>{menus.find(a=>a.selected)?.name}</title>
</svelte:head>
<PageMarginTop/>
<Section>
    <div class="grid gap-[6rem]">
        <SubMenus menus={menus}/>
    </div>
</Section>
<slot/>