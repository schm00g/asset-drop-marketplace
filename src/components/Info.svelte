<script>
	export let lastSyncedSlot;
	export let lastNetworkSlot;
	export let networkLag;
	export let laggingBehind;
</script>

<div class="footer">
    <!-- <h3>Solana Network Status</h3> -->
    <p>
        Last Synced Slot <b><code>{lastSyncedSlot}</code></b> Last Network Slot <b><code>{lastNetworkSlot}</code></b>
        Network Lag <b><code>{networkLag}</code></b>
        Lagging Behind? <b><code>{laggingBehind}</code></b>
        {#if !laggingBehind}
            <span class="success_dot"></span>
        {:else}
            <span class="failure_dot"></span>
        {/if}
    </p>
</div>

<style>
    .footer {
        /* TODO: scrolling issues */
        color: rgb(165, 165, 165);
        position: fixed;
        bottom: -8px;
        right: 10px;
        width: 100%;
        padding-left: auto;
        padding-right: auto;

    }
    .success_dot {
        height: 10px;
        width: 10px;
        background-color: rgb(53, 253, 4);
        border-radius: 50%;
        display: inline-block;
    }
    .failure_dot {
        height: 10px;
        width: 10px;
        background-color: rgb(255, 2, 2);
        border-radius: 50%;
        display: inline-block;
    }
</style>