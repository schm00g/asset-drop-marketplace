<script>
    import { onMount } from "svelte";
    // import { apiData, networkStatus } from '../store.js';
    import Info from './Info.svelte';

    let statusData = {};
    
    // promise

    onMount(async () => {
      fetch("https://prod-api.solana.surf/v1/network-status")
      .then(response => response.json())
      .then(data => {
          statusData = data;
      }).catch(error => {
        console.log(error);
        return [];
      });
    });
</script>
    
<main>
    {#if statusData}
        <Info {...statusData}/> 
    {/if}
</main>
