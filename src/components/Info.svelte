<script>
	export let lastSyncedSlot;
	export let lastNetworkSlot;
	export let networkLag;
	export let laggingBehind;
</script>

<div class="footer">
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
        writing-mode: vertical-lr;
        text-orientation: mixed;
        color: rgb(165, 165, 165);
        position: fixed;
        bottom: 10px;
        left: -10px;
        width: 0;
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
