<script>
	let user = { walletConnected: false };

	function toggle() {
		user.walletConnected = !user.walletConnected;
	}
</script>

{#if user.walletConnected}
<button on:click={toggle}>
	Connect Wallet
</button>
{:else}
<button on:click={toggle}>
	Disconnect Wallet
</button>
{/if}

<style>
    button {
        background-color: #0e0e0e;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 50px;
        position: relative;
        top: 0;
        transition: top ease 0.4s;
    }
    button:active {
        background-color: #3f3f3f;
    }
    button:hover {
        top: -2px;
    }
</style>