<script>
    export let class_ = "";
</script>
<div class=" text-red-600 font-bold text16-400 justify-center items-center bg-red-200 p-4 fixed bottom-0 w-full left-0 flex gap-4 {class_}">
  <i class="bi bi-exclamation-circle"></i>
  <p class="single-line">
    <slot/>
  </p>
</div>