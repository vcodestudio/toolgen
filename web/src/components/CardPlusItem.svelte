<script>
  export let card
  $: post = {
    ...card,
    open: false,
  }
</script>

<div
  class="plus-card relative overflow-hidden rounded-md p-10 bg-cover bg-center h-[320px] m:h-[240px]"
  style="background-image:url({post.imgUrl})"
>
  <div
    class="text flex flex-col text-white h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-transparent absolute top-0 left-0 p-10 w-full m:p-5"
  >
    {#if !post.open}
      <h3 class="leading-6">{post.title}</h3>
    {/if}
    <div class="flex-auto" />
    <div>
      <button
        on:click={() => {
          post.open = !post.open
        }}
        class="clean w-[2.5em] h-[2.5em]"
      >
        <svg class="w-full h-full" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="22" fill="#F8DB15" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 15C23 14.4477 22.5523 14 22 14C21.4477 14 21 14.4477 21 15V21H15C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23H21V29C21 29.5523 21.4477 30 22 30C22.5523 30 23 29.5523 23 29V23H29C29.5523 23 30 22.5523 30 22C30 21.4477 29.5523 21 29 21H23V15Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  </div>
  {#if post.open}
    <div
      class="absolute top-0 left-0 flex flex-col w-full h-full gap-6 p-10 pb-[8rem] pr-[6rem] overflow-y-auto text-white bg-black card-ov bg-opacity-80"
    >
      <h4 class="color-blue">{post.title}</h4>
      {@html post.content.html}
    </div>
    <div class="absolute bottom-0 left-0 w-full h-[8rem] bg-gradient-to-t from-black" />
    <button
      on:click={() => {
        post.open = !post.open
      }}
      class="clean absolute right-10 top-10 w-[2.25rem] h-[2.25rem]"
    >
      <svg class="w-full h-full" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.0569 17.9998L11.5283 23.5283L12.4711 24.4711L17.9997 18.9426L23.5283 24.4712L24.4711 23.5284L18.9425 17.9998L24.4711 12.4711L23.5283 11.5283L17.9997 17.0569L12.4711 11.5284L11.5283 12.4712L17.0569 17.9998Z"
          fill="white"
        />
        <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="white" stroke-opacity="0.4" />
      </svg>
    </button>
  {/if}
</div>
