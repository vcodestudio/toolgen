<script>
  import '$lib/precomp'
  import Logo from '$lib/components/Logo.svelte'
  import { page } from '$app/stores'
  import { __e } from '$lib/utils'

  let lang = $page.params.lang

  export let meta = []

  $: datas = meta.reduce((acc, cur, i) => {
    if (i % 4 === 0) {
      acc.push([cur])
    } else {
      acc[acc.length - 1].push(cur)
    }
    return acc
  }, [])
</script>

<footer class="fill-sub p-20 px-0 m:py-[40px]">
  <div class="flex flex-col gap-6 w-limit">
    <div class="flex m:flex-col m:gap-[1rem]">
      <div class="flex-none">
        <Logo />
      </div>
      <div class="flex flex-auto gap-6 pc:justify-end">
        <a href="/{lang}/policy" class="text16-underline"><b>{__e(lang, '개인정보취급방침')}</b></a>
        <a href="/{lang}/policy/rules" class="text16-underline"><b>{__e(lang, '내부정보관리규정')}</b></a>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      {#each datas as data, i}
        <div class="divider" class:eng={i == 0 && lang == 'eng'}>
          {#each data as { title, desc }}
            <p>
              {#if title}
                <b>{title}</b>
              {/if}
              {desc}
            </p>
          {/each}
        </div>
      {/each}
    </div>
    <div>
      <p class="text16-400 fg-sub">Copyright 2023 © ToolGen, Inc. All Rights Reserved.</p>
    </div>
  </div>
</footer>
