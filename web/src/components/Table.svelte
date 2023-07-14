<script>
    export let data = [];
</script>
<table>
  <thead>
    <tr>
        {#each data[0] as col}
            <th>{col}</th>
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