<div class="grid grid-cols-[1fr,2fr] gap-20">
    <div>
        <p class="text24-400 fg-sub em:py-3">Department Name</p>
    </div>
    <div>
        {#each [0,0,0,0] as item,i}
            <div class="flex em:py-3 text24-700 items-center gap-4 border-gray-200 {i == 3?"":"border-b-[1px]"}">
                <p class="flex-auto">Project Team Leader, Crop</p>
                <div>
                    <svg class="w-[1em] h-[1em]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5857 13.0001H3V11.0001H18.5858L11.2928 3.70718L12.7071 2.29297L22.4142 12.0001L12.7071 21.7072L11.2928 20.293L18.5857 13.0001Z" fill="black"/>
                    </svg>                            
                </div>
            </div>
        {/each}
    </div>
</div>