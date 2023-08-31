<script>
  import { onMount } from 'svelte'

  export let data = []
  export let header = []
</script>

<table>
  <thead>
    <tr>
      {#each header as col}
        <th>{col}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as item, i}
      <tr>
        {#each Object.values(item) as col}
          <td>{col}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
