<script>
	let user = { walletConnected: true };
	function toggle() {
		user.walletConnected = !user.walletConnected;
	}
    async function connect(){
        try {
            const resp = await window.solana.connect();
            resp.publicKey.toString()
            toggle();
            // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
        } catch (err) {
            console.log(`Error message: `, err);
            // { code: 4001, message: 'User rejected the request.' }
        }
    }

</script>

{#if user.walletConnected}
<button on:click={connect}>
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