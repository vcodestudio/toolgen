<script>
import {popup} from "$lib/screen";
  export let items = [];
  export let title = "";
</script>
<div class="grid gap-6">
    {#if title}
    <p class="fg-sub">{title}</p>
    {/if}
    <div class="grid gap-20">
        <div class="grid gap-10 m:scroll-x">
            {#each items as item, idx}
                <div class="grid gap-4 pipline-item">
                    <div class="w-full flex gap-4 items-center">
                        <h4 class="single-line">{item.title}</h4>
                        <p class="text12-400 fg-sub single-line">{item.desc ?? ""}</p>
                        <div class="flex-auto flex justify-end">
                            <button class="small lblue" on:click={()=>{popup.set({type:"panel"});}}>
                                더보기
                            </button>
                        </div>
                    </div>
                    <div class="grid gap-1">
                        <div class="progress">
                            <div class="progress-bar" style="width: {item.progress}%"></div>
                        </div>
                        <div class="flex">
                            {#each [
                                'Program(Disease)',
                                'Modeling',
                                'In vitro',
                                'In vivo',
                                'Lead Optimization',
                                'Pre-Clinical',
                                'IND',
                                'Phase 1'
                                ] as item}
                            <p class="border-l-2 border-t-gray-400 px-1 text10-400 fg-sub flex-1">{item}</p>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>