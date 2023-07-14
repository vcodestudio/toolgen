<script>
    import {twoDigits} from "$lib/utils.js";
    export const items = [
        {name:"CRISPR-Cas9을 이용한 유전자 교정 기술을 사용하면, 툴젠 특허를 침해하나요?", desc:"현재 미국에서 툴젠은 CVC 그룹과, Broad연구소를 상대로 CRISPR-Cas9 특허 최초 발명자로 인정받기 위한 저촉심사(interference) 절차를 진행하고 있습니다. 그러므로, 저촉심사 절차가 종료되어 특허 소유자가 최종 결정되기 전까지는 미국 CRISPR-Cas9 특허는 툴젠의 단독 소유라고 단정하기 어렵습니다. 다만 툴젠은 저촉심사 절차에서 경쟁자인 CVC 그룹이나 Broad연구소에 비해 우월한 senior party의 지위를 인정 받았으므로, 현재 경쟁자들 대비 매우 유리한 위치에 있습니다."},
        {name:"CRISPR-Cas9을 이용한 유전자 교정 기술을 사용하면, 툴젠 특허를 침해하나요?", desc:"현재 미국에서 툴젠은 CVC 그룹과, Broad연구소를 상대로 CRISPR-Cas9 특허 최초 발명자로 인정받기 위한 저촉심사(interference) 절차를 진행하고 있습니다. 그러므로, 저촉심사 절차가 종료되어 특허 소유자가 최종 결정되기 전까지는 미국 CRISPR-Cas9 특허는 툴젠의 단독 소유라고 단정하기 어렵습니다. 다만 툴젠은 저촉심사 절차에서 경쟁자인 CVC 그룹이나 Broad연구소에 비해 우월한 senior party의 지위를 인정 받았으므로, 현재 경쟁자들 대비 매우 유리한 위치에 있습니다."},
        {name:"CRISPR-Cas9을 이용한 유전자 교정 기술을 사용하면, 툴젠 특허를 침해하나요?", desc:"현재 미국에서 툴젠은 CVC 그룹과, Broad연구소를 상대로 CRISPR-Cas9 특허 최초 발명자로 인정받기 위한 저촉심사(interference) 절차를 진행하고 있습니다. 그러므로, 저촉심사 절차가 종료되어 특허 소유자가 최종 결정되기 전까지는 미국 CRISPR-Cas9 특허는 툴젠의 단독 소유라고 단정하기 어렵습니다. 다만 툴젠은 저촉심사 절차에서 경쟁자인 CVC 그룹이나 Broad연구소에 비해 우월한 senior party의 지위를 인정 받았으므로, 현재 경쟁자들 대비 매우 유리한 위치에 있습니다."},
        {name:"CRISPR-Cas9을 이용한 유전자 교정 기술을 사용하면, 툴젠 특허를 침해하나요?", desc:"현재 미국에서 툴젠은 CVC 그룹과, Broad연구소를 상대로 CRISPR-Cas9 특허 최초 발명자로 인정받기 위한 저촉심사(interference) 절차를 진행하고 있습니다. 그러므로, 저촉심사 절차가 종료되어 특허 소유자가 최종 결정되기 전까지는 미국 CRISPR-Cas9 특허는 툴젠의 단독 소유라고 단정하기 어렵습니다. 다만 툴젠은 저촉심사 절차에서 경쟁자인 CVC 그룹이나 Broad연구소에 비해 우월한 senior party의 지위를 인정 받았으므로, 현재 경쟁자들 대비 매우 유리한 위치에 있습니다."},
    ]
    items.map(a=>{a.open=false});
</script>

<div class="accordion-b grid gap-6">
    {#each items as item, i}
    <div class="item">
        <div class="flex gap-6">
            <p class="fg-sub">{twoDigits(i+1)}</p>
            <div class="w-full">
                <div class="bar flex w-full items-center"
                tabindex="0" role="button"
                on:click={()=>{item.open=!item.open;}} 
                on:keydown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            item.open = !item.open;
                        }
                    }}>
                    <span class="flex-auto">
                        {item.name}
                    </span>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.2024L19.6888 7L21 8.39879L12 18L3 8.39879L4.3112 7L12 15.2024Z" fill="black"/>
                        </svg>                            
                    </div>
                </div>
                {#if item.open}
                <div class="cont mt-6">
                    {item.desc}
                </div>
                {/if}
            </div>
        </div>
    </div>
    {/each}
</div>