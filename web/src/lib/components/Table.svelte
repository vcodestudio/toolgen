<script>
  export let data = []
</script>

<div class="w-full overflow-x-auto t-table">
  <table>
    <thead>
      <tr>
        {#each data[0] ?? [] as col}
          <th class="min-w-[100px]">{col}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data.slice(1) as item}
        <tr>
          {#each item as col}
            <td>{col}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="less">
  .t-table {
    // show scrollbar
    padding-bottom: 0.5em;
    &::-webkit-scrollbar {
      height: 0.5em;
      display: block;
    }
    &::-webkit-scrollbar-track {
      background: #eee;
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 0.5em;
    }
  }
</style>
