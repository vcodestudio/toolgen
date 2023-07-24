<script>
  export let src = '/images/licensing/1.png'
</script>

<div class="bottom-banner relative" style="background-image:url({src})">
  <div class="dim" />
  <div class="w-limit grid gap-6 relative">
    <slot />
  </div>
</div>
