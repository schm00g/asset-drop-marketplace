<script>
	let count = 0;
    let total = 10;
    let soldOut = false;
    $: remaining = total - count;
    $: {
        // easy to group reactive statements
        console.log('the count is ' + count);
    }

	function incrementCount() {
        // event handler code goes here
        count += 1;
        if(remaining <= 1){
            soldOut = true;
        }
	}
</script>

<button disabled={soldOut} on:click={incrementCount}>
    Minted {count} {count === 1 ? 'edition' : 'editions'} - left remaining {remaining}
</button>

<style>
    button {
        background-color: #0e0e0e;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 9px;
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