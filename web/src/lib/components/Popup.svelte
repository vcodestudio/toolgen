<script>
  import { popup } from '$lib/screen'
  import TableBoard from './TableBoard.svelte'
  import { page } from '$app/stores'
  import { __e, __t } from '$lib/utils'
  import { applyAction, deserialize } from '$app/forms'
  import { onMount } from 'svelte'

  let lang = $page.params.lang

  let upload

  let formEnd = false
  let errors = {}

  function ltn(str) {
    // convert lsep to \n
    return str?.replace(/[\u2028]/g, '<br>')
  }

  async function handleSubmit(event) {
    const data = new FormData(this)
    const action = this.action.split('?/')[1] ?? ''

    let res = { type: 'error' }

    const req = await fetch(this.action, {
      method: 'POST',
      body: data,
    })
    res = deserialize(await req.text())

    console.log(res)

    if (res.type == 'success') {
      if (res.data.success) {
        formEnd = true
      } else {
        errors = res.data?.errors ?? {}
      }
    } else {
    }
  }

  function popset(bool) {
    popup.set(bool)
    formEnd = false
  }

  // onMount(async () => {
  //   const req = await fetch('/api/email?/license', {
  //     method: 'POST',
  //     body: new FormData(),
  //   })
  //   res = deserialize(await req.text())
  // })
</script>

{#if $popup}
  <div
    class="overlay"
    class:backImg={['panel', 'form', 'db'].includes($popup.type)}
    class:mint={['db'].includes($popup.type)}
    tabindex="0"
    role="button"
    on:click|self={() => {
      popset(false)
    }}
    on:keydown|self={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        popset(false)
      }
    }}
  >
    <div class="panel items-center {$popup.type} max-h-[90vh] overflow-y-auto">
      <a
        class="clean exit pc"
        href="/"
        on:click|preventDefault={() => {
          popset(false)
        }}
      >
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="36" height="36" rx="18" fill="white" fill-opacity="0.2" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6953 23.3619C12.4349 23.6223 12.4349 24.0444 12.6953 24.3047C12.9556 24.5651 13.3777 24.5651 13.6381 24.3047L18.5 19.4428L23.3619 24.3047C23.6223 24.5651 24.0444 24.5651 24.3047 24.3047C24.5651 24.0444 24.5651 23.6223 24.3047 23.3619L19.4428 18.5L24.3047 13.6381C24.5651 13.3777 24.5651 12.9556 24.3047 12.6953C24.0444 12.4349 23.6223 12.4349 23.3619 12.6953L18.5 17.5572L13.6381 12.6953C13.3777 12.4349 12.9556 12.4349 12.6953 12.6953C12.4349 12.9556 12.4349 13.3777 12.6953 13.6381L17.5572 18.5L12.6953 23.3619Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        class="clean exit mob"
        href="/"
        on:click|preventDefault={() => {
          popset(false)
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.5858 20.0001L10.293 28.293L11.7072 29.7072L20 21.4143L28.293 29.7073L29.7072 28.2931L21.4142 20.0001L29.7072 11.7072L28.293 10.293L20 18.5859L11.7072 10.2931L10.293 11.7073L18.5858 20.0001Z"
            fill="currentColor"
          />
        </svg>
      </a>
      {#if $popup.type == 'panel'}
        <div class="content">
          <div class="grid gap-4">
            <div class="grid gap-2">
              <h3 class="text24-700 color-blue">{$popup.data?.title}</h3>
              <p class="text14-400 fg-sub">{$popup.data?.desc}</p>
            </div>

            <div class="grid em:gap-4">
              {#if $popup.data?.content}
                {@html $popup.data?.content}
              {:else}{/if}
            </div>
          </div>
        </div>
      {:else if $popup.type == 'form'}
        <div class="content">
          {#if !formEnd}
            <div class="grid gap-6">
              <div class="grid gap-1">
                <p class="text14-400 fg-sub">Interest in ToolGen's</p>
                <p class="text18-700">[{$popup.data?.title}]</p>
                <p>
                  {$popup.data?.content}
                </p>
              </div>
              <form
                class="grid gap-4"
                method="POST"
                action="/api/email?/license"
                on:submit|preventDefault={handleSubmit}
              >
                <input type="hidden" name="type" value="license" />
                <input type="hidden" name="lang" value={lang} />
                <input type="hidden" name="title" value={$popup.data?.title} />
                <div class="grid gap-2">
                  <p class="text14-700">{__e(lang, '성명')} <span class="fg-blue">*</span></p>
                  {#if errors.name}
                    <p class="text-sm text-red-500">{errors.name}</p>
                  {/if}
                  <input type="text" name="name" />
                </div>
                <div class="grid gap-2">
                  <p class="text14-700">{__e(lang, '단체명/기업명')} <span class="fg-blue">*</span></p>
                  {#if errors.company}
                    <p class="text-sm text-red-500">{errors.company}</p>
                  {/if}
                  <input type="text" name="company" />
                </div>
                <div class="grid gap-2">
                  <p class="text14-700">{__e(lang, '이메일')} <span class="fg-blue">*</span></p>
                  {#if errors.email}
                    <p class="text-sm text-red-500">{errors.email}</p>
                  {/if}
                  <input type="text" name="email" />
                </div>
                <div class="grid gap-2">
                  <p class="text14-700">
                    {__e(lang, '연락처')} <span class="text14-400 fg-sub">({__e(lang, '선택')})</span>
                  </p>
                  <input type="text" name="number" />
                </div>
                <div class="grid gap-2">
                  <p class="text14-700">{__e(lang, '문의사항')} <span class="fg-blue">*</span></p>
                  {#if errors.desc}
                    <p class="text-sm text-red-500">{errors.desc}</p>
                  {/if}
                  <textarea rows="5" name="desc" />
                </div>
                <div>
                  <button class="fill">{__e(lang, '보내기')}</button>
                </div>
              </form>
            </div>
          {:else}
            <div class="flex flex-col gap-8">
              <p class="text-lg text-center">{__t('form.send_thank', lang, '발송감사')}</p>
              <button
                class="fill"
                on:click={e => {
                  popset(false)
                }}>CLOSE</button
              >
            </div>
          {/if}
        </div>
      {:else if $popup.type == 'db'}
        <div class="content">
          {#if !formEnd}
            <form class="grid gap-6" action="/api/email?/sendDB" on:submit|preventDefault={handleSubmit}>
              <div class="grid gap-1">
                <p class="text14-400 fg-sub">Apply to ToolGen's</p>
                <p class="text18-700">{__e(lang, '인재 DB 등록')}</p>
                <p>
                  {__t('career.1', lang)}
                </p>
              </div>
              <input type="hidden" name="type" value="recruit" />
              <input type="hidden" name="lang" value={lang} />
              <div class="grid gap-4">
                <div class="grid gap-2">
                  <p class="text14-700">{__e(lang, '성명')} <span class="fg-blue">*</span></p>
                  {#if errors.name}
                    <p class="text-sm text-red-500">{errors.name}</p>
                  {/if}
                  <input type="text" name="name" />
                </div>
                <div class="grid gap-2">
                  <p class="text14-700">{__e(lang, '이메일')} <span class="fg-blue">*</span></p>
                  {#if errors.email}
                    <p class="text-sm text-red-500">{errors.email}</p>
                  {/if}
                  <input type="text" name="email" />
                </div>
                <div class="grid gap-2">
                  <p class="text14-700">{__e(lang, '연락처')} <span class="fg-blue">*</span></p>
                  {#if errors.number}
                    <p class="text-sm text-red-500">{errors.number}</p>
                  {/if}
                  <input type="text" name="number" />
                </div>
                <div class="grid gap-2">
                  <p class="text14-700">{__e(lang, '첨부자료')} <span class="fg-blue">*</span></p>
                  <p class="text12-500">{__t('form.download', lang)}</p>
                  {#if errors.upload}
                    <p class="text-sm text-red-500">{errors.upload}</p>
                  {/if}
                  <input type="text" name="upload" />
                  <!-- <input
                    type="file"
                    id="upload_"
                    name="upload"
                    bind:this={upload}
                    on:change={() => {
                      upload = upload
                    }}
                  /> -->
                  <!-- <label for="upload_" class="cursor-pointer">
                    <div class="flex-auto">
                      {#if upload?.files?.length}
                        <span>
                          {upload.files[0].name}
                        </span>
                      {:else}
                        <span class="text-gray-400">
                          {__t('career.2', lang, 'ex)입사지원서 ...')}
                        </span>
                      {/if}
                    </div>
                    <svg
                      class="block w-[1em] h-[1em]"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.3233 1.04716C7.20156 0.916032 7.02768 0.833984 6.83464 0.833984C6.83443 0.833984 6.83422 0.833984 6.83401 0.833985C6.66339 0.833977 6.49276 0.899064 6.36258 1.02925L3.02925 4.36258C2.7689 4.62293 2.7689 5.04504 3.02925 5.30539C3.2896 5.56574 3.71171 5.56574 3.97206 5.30539L6.16797 3.10948L6.16797 9.50065C6.16797 9.86884 6.46644 10.1673 6.83463 10.1673C7.20282 10.1673 7.5013 9.86884 7.5013 9.50065L7.5013 3.11078L9.69591 5.30539C9.95626 5.56574 10.3784 5.56574 10.6387 5.30539C10.8991 5.04504 10.8991 4.62293 10.6387 4.36258L7.3233 1.04716ZM0.833659 8.83253C1.20185 8.83253 1.50033 9.131 1.50033 9.49919V12.1659C1.50033 12.3427 1.57056 12.5122 1.69559 12.6373C1.82061 12.7623 1.99018 12.8325 2.16699 12.8325H11.5003C11.6771 12.8325 11.8467 12.7623 11.9717 12.6373C12.0968 12.5122 12.167 12.3427 12.167 12.1659V9.49919C12.167 9.131 12.4655 8.83253 12.8337 8.83253C13.2018 8.83253 13.5003 9.131 13.5003 9.49919V12.1659C13.5003 12.6963 13.2896 13.205 12.9145 13.5801C12.5395 13.9551 12.0308 14.1659 11.5003 14.1659H2.16699C1.63656 14.1659 1.12785 13.9551 0.752779 13.5801C0.377706 13.205 0.166992 12.6963 0.166992 12.1659V9.49919C0.166992 9.131 0.465469 8.83253 0.833659 8.83253Z"
                        fill="#888888"
                      />
                    </svg>
                  </label> -->
                </div>
                <div>
                  <button class="fill">{__e(lang, '보내기')}</button>
                </div>
              </div>
            </form>
          {:else}
            <div class="flex flex-col gap-8">
              <p class="text-lg text-center">{__t('form.send_thank', lang)}</p>
              <button
                class="fill"
                on:click={e => {
                  popset(false)
                }}>CLOSE</button
              >
            </div>
          {/if}
        </div>
      {:else if $popup.type == 'profile'}
        <div class="fill-blue pop-profile flex text-white m:flex-col m:py-[60px] m:w-full m:max-w-full">
          <div class="thumb flex-[5] bg-white m:flex-none flex m:bg-transparent justify-center">
            <div class="bg-white">
              <!-- {$popup.data.detail_image?.data.attributes.url} -->
              <img
                class="w-full h-full block object-cover m:h-[350px] m:w-auto"
                src={$popup.data?.img}
                alt={$popup.data?.name}
              />
            </div>
          </div>
          <div class="desc p-6 grid gap-6 flex-[6] m:flex-[1]">
            <div class="flex">
              <div>
                <p class="text16-700">{$popup.data?.name}</p>
                {#if $popup.data?.job_2}
                  <p class="opacity-50 text14-400">{@html ltn($popup.data?.job_2)}</p>
                {/if}
              </div>
            </div>
            <div class="relative max-h-[350px]">
              <div class="overflow-y-auto leading-7 h-[100%] m:max-h-full">
                <p class="whitespace-pre-wrap body14-400">
                  {$popup.data?.desc}
                </p>
                <p>
                  <br /><br /><br />
                </p>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-[50px] gradient-blue" />
            </div>
          </div>
        </div>
      {:else if $popup.type == 'pct'}
        <div class="content w-[1280px]">
          <div class="grid gap-4">
            <h4>CRISPR-Cas9 {__e(lang, '응용특허 PCT 출원 리스트')}</h4>
            <TableBoard posts={$popup.data ?? []} />
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}
