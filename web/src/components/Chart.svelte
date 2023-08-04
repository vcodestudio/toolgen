<script>
  export let title = ''
  export let data = []
  const colors = ['fill-mint', 'fill-blue', 'fill-navy']
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  // 비율 계산
  let sum = 0
  data.forEach(a => (a.value_ = a.value))
  data.forEach(a => (sum = Math.max(sum, +a.value_)))
  data.forEach(a => (a.percent = 10 + (a.value_ / sum) * 90 + '%'))
</script>

<div class="flex flex-col gap-4">
  <h4>{title}</h4>
  {#each data as item, i}
    <div class="flex items-center gap-4">
      <span class="text16-500">{item.year}</span>
      <div class="flex-auto">
        <div
          class="{colors[i % colors.length]} rounded-full flex justify-end p-[1em] py-[0.5em] text-white text14-500"
          style="width:{item.percent}"
        >
          {numberWithCommas(item.value)}
        </div>
      </div>
    </div>
  {/each}
</div>
