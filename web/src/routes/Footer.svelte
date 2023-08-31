<script>
  import '$lib/precomp'
  import Logo from '$lib/components/Logo.svelte'
  import { page } from '$app/stores'
  import { __e } from '$lib/utils'

  let lang = $page.params.lang
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
      <div class="divider">
        <p>서울 강서구 마곡중앙로 172 8층 (07789)</p>
        <p><b>업무시간</b> 08:30 ~ 17:30 (주말, 공휴일 휴무)</p>
        <p><b>사업자등록번호</b> 108-81-18555</p>
        <p><b>대표이사/사장</b> 이병화</p>
      </div>
      <div class="divider">
        <p><b>E-mail</b> info@toolgen.com</p>
        <p><b>Tel</b> 02-3660-1330</p>
        <p><b>Fax</b> 02-3660-1310</p>
      </div>
    </div>
    <div>
      <p class="text16-400 fg-sub">Copyright 2023 (C) ToolGen, Inc. All Rights Reserved.</p>
    </div>
  </div>
</footer>
