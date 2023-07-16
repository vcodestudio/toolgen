<script>
    import Pagination from "../../components/Pagination.svelte"
    import Section from "../../components/Section.svelte"
    import Table from "../../components/Table.svelte"
    import {page} from "$app/stores"
    import { popup } from "../../lib/screen"

    let selectedCountry = "all";
// 한국, 미국, 일본, 케나다, 브라질, 유럽, 인도
let countries = [
    { name: "한국",slug:"kr",lng: "127.766922",lat: "35.907757" },
    { name: "미국",slug:"eng",lng: "-95.712891",lat: "37.090240" },
    { name: "일본",slug:"jp",lng: "138.252930",lat: "36.204823" },
    { name: "케나다",slug:"ca",lng: "-106.346771",lat: "56.130367" },
    { name: "브라질",slug:"br",lng: "-51.925282",lat: "-14.235004" },
    { name: "유럽",slug:"eu",lng: "9.555373",lat: "47.516231" },
    { name: "인도",slug:"in",lng: "78.962883",lat: "20.593683" },
];

const lngToX = (lng) => {
    return (lng/360 + 0.5)*100;
};

const latToY = (lat) => {
    return (-lat/180 + 0.5)*100;
};

countries.forEach(a => {
    a.lng = parseFloat(a.lng);
    a.lat = parseFloat(a.lat);

    const offset = [-4.5,9];
    a.x = lngToX(a.lng) + offset[0];
    a.y = latToY(a.lat) + offset[1];
});

const generateData = (country) => {
    const data = [];
    const states = ["출원", "등록", "심사", "발행", "취소"];
    const date = new Date("2021-01-01");

    country = countries.find(a=>a.slug == selectedCountry)?.name;
    for (let i = 0; i < 10; i++) {
    // if country == "", random country
      let sc = country;
      if(!country) sc = countries[Math.floor(Math.random() * countries.length)].name;
      data.push({
        name: sc,
        number: Math.floor(Math.random() * 10000000),
        date: date.toISOString().slice(0, 10),
        state: states[Math.floor(Math.random() * states.length)]
      });
      date.setDate(date.getDate() + 1);
    }
    return data;
  };

  let posts = generateData(selectedCountry);
  let tab = $page.url?.searchParams.get("tab") ?? "1"

  $: {
    posts = generateData(selectedCountry);
    if($page) {
        tab = $page.url?.searchParams.get("tab") ?? "1"
    }
  }

  const _active = "text24-700 border-b-2 border-black";
  const _inactive = "text24-400 fg-sub";
</script>

<Section>
    <div class="grid gap-[2rem]">
        <h2>CRISPR-Cas9 Foundational Patent</h2>
        <div class="flex gap-[1.5rem]">
            <a class={tab==1?_active:_inactive} href="?tab=1">원천특허</a>
            <a class={tab==2?_active:_inactive} href="?tab=2">응용특허</a>
        </div>
        <div class="grid gap-4">
            <div class="map relative w-full pc">
                <img class="block w-full h-auto" src="/images/map.jpg" alt="map"/>
                {#each countries as country}
                <a href="#" class:active={selectedCountry == country.slug} class="marker text16-500 absolute text-center flex flex-col gap-4 items-center -translate-y-[100%] -translate-x-[50%]" style="left:{country.x}%;top:{country.y}%"  on:click|preventDefault={()=>{selectedCountry = country.slug}} >
                    {#if selectedCountry == country.slug}
                    <div class="  bg-white rounded-3xl shadow-lg px-[1rem] py-[1rem] relative bottom-4">
                        <div class="flex gap-3 items-center">
                            <div class="w-[70px] h-[70px] rounded-3xl">
                                <img class="block w-full h-full object-cover" src="/images/map-eu.jpg" alt="map"/>
                            </div>
                            <div class="flex flex-col gap-2 items-start">
                                <p class="text16-700 single-line">{country.name}</p>
                                <div class="flex flex-col gap-2 text14-400">
                                    <p class="single-line">출원 : 10개</p>
                                    <p class="single-line">특허 : 10개</p>
                                </div>
                            </div>
                        </div>
                        <svg class="absolute left-1/2 top-full -translate-x-1/2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 0H0.5L8 12L15.5 0Z" fill="white"/>
                        </svg>                            
                    </div>
                    {:else}
                    <span>
                        {country.name}
                    </span>
                    {/if}
                    <div class="w-0 h-0 rounded-full relative">
                        <div class="pin flex justify-center items-center rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                            
                        </div>
                    </div>
                </a>
                {/each}
                {#if tab == 2}
                <button class="navy absolute right-0 top-0" on:click={()=>{popup.set({type:"pct"})}}>PCT 출원 리스트</button>
                {/if}
            </div>
            <div>
                {#if tab == 2}
                <button class="navy" on:click={()=>{popup.set({type:"pct"})}}>PCT 출원 리스트</button>
                {/if}
            </div>
            <div class="flex gap-4 flex-wrap m:scroll-x m:flex-nowrap">
                <button class:fill={selectedCountry == "all"} on:click={()=>{selectedCountry = "all"}}>전체</button>
                {#each countries as country}
                <button class:fill={country.slug == selectedCountry} on:click={()=>{selectedCountry = country.slug}}>{country.name}</button>
                {/each}
            </div>

            <div class="flex justify-end">
                <p class="fg-sub single-line">출원: 0건 | 등록: 0건</p>
            </div>
            <Table data={
                [
                    ["국가", "특허번호", "등록일", "상태"],
                    ...posts.map(a => [a.name, a.number, a.date, a.state])
                ]
            }/>
            <Pagination/>
        </div>
    </div>
</Section>
