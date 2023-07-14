<script>
    import { hHeight } from "../lib/store"
	import Logo from "/src/components/Logo.svelte";
	import { onMount } from "svelte";
	import {popup} from "../lib/screen";

	export let height=0;
	let header;
	let menuActive = false;
	let menus = [
		{
			name: "CRISPR\nFoundational Patent",
			slug: "crispr",
			link: "/crispr",
			selected: false,
		},
		{
			name: "Licensing\n& Partnership",
			slug: "licensing-partnership",
			link: "/licensing-partnership",
			selected: false,
		},
		{
			name: "Platform",
			slug: "platform",
			link: "/platform",
			selected: false,
		},
		{
			name: "Therapeutics",
			slug: "therapeutics",
			link: "/therapeutics",
			selected: false,
		},
		{
			name: "Crops",
			slug: "crops",
			link: "/crops",
			selected: false,
		},
		{
			name: "People",
			slug: "people",
			link: "/people",
			selected: false,
		},
		{
			name: "Investors",
			slug: "investors",
			link: "/investors",
			selected: false,
		},
		{
			name: "About us",
			slug: "about-us",
			link: "/about-us",
			selected: true,
		},
	]

	let scrollY=0;

	onMount(() => {
		hHeight.set(header.clientHeight);
	});
</script>
<svelte:window bind:scrollY={scrollY}/>
<header bind:this={header} class:active={scrollY > 50}>
	<div class="w-limit flex justify-end gap-6 single-line top-bar pc">
		<a href="/career" class="color-mint">Career</a>
		<div class="divider single-line">
			<a href="/">한</a>
			<a href="/" class="color-disable">A</a>
		</div>
	</div>
	<div class="w-limit flex gnb pc">
		<div><Logo color={(scrollY > 50)?[]:[]}/></div>
		<div class="menu flex-auto flex gap-9 justify-end items-center">
			{#each menus as menu}
				<a href={menu.link} class="menu-item" class:selected={menu.selected} on:click={() => {
					menus.forEach(m => m.selected = false);
					menu.selected = true;
				}}><span class="menu-item-text" style="white-space: pre-line;">{menu.name}</span></a>
			{/each}
		</div>
	</div>
	<div class="w-limit py-3 flex item-center mob">
		<div class="flex-none flex items-center"><Logo/></div>
		<div class="flex-auto flex justify-end hambug">
			<button class="clean w-10 h-10" class:active={menuActive} on:click={()=>{menuActive = !menuActive}}>
			{#if menuActive}
			<svg class=" w-2/3 h-2/3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12.0001L2.29297 20.293L3.70718 21.7072L12 13.4143L20.293 21.7073L21.7072 20.2931L13.4142 12.0001L21.7072 3.70718L20.293 2.29297L12 10.5859L3.70718 2.29306L2.29297 3.70728L10.5858 12.0001Z" fill="currentColor"/>
			</svg>
			{:else}
			<svg class=" w-2/3 h-2/3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="3" y="5" width="18" height="2" fill="currentColor"/>
				<rect x="3" y="11" width="18" height="2" fill="currentColor"/>
				<rect x="3" y="17" width="18" height="2" fill="currentColor"/>
			</svg>	
			{/if}
			</button>
		</div>
	</div>
	{#if menuActive}
	<div class="absolute top-full left-0 w-full bg-white py-8">
		<div class="w-limit flex flex-col gap-6">
			{#each menus as menu}
				<a href={menu.link} class="menu-item" class:selected={menu.selected} on:click={() => {
					menus.forEach(m => m.selected = false);
					menu.selected = true;
					menuActive = false;
				}}><span class="menu-item-text">{menu.name}</span></a>
			{/each}
		</div>
	</div>
	{/if}
</header>
{#if menuActive}
	<div on:click={()=>{menuActive =false}} class="bg-black bg-opacity-70 fixed top-0 left-0 z-50 w-full h-full"></div>
{/if}