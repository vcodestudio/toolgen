<script>
  import { onMount } from 'svelte'
  import Section from '$lib/components/Section.svelte'
  export let data
  $: posts = data.page
  onMount(() => {
    console.log(posts)
  })
</script>

<Section>
  <div class="grid gap-[2em]">
    <div class="grid gap-2">
      <h3>{posts[0]?.title}</h3>
      {@html posts[0]?.content.html}
    </div>
    <hr />
    <div class="grid gap-2">
      <p class="text18-700">{posts[1]?.title}</p>
      {@html posts[1]?.content.html}
      <br />
      <img class="block mx-auto" src={posts[1]?.img.url} alt="..." />
    </div>
    <hr />
    <div class="flex flex-col gap-8">
      <div class="grid grid-cols-2 gap-6 m:grid-cols-1">
        <div class="flex flex-col gap-2">
          <p class="text18-700">{posts[2]?.title}</p>
          {@html posts[2]?.content.html}
        </div>
        <div>
          <img class="block" src={posts[2]?.img.url} alt="..." />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        {@html posts[3]?.content.html}
      </div>
    </div>
  </div>
</Section>
