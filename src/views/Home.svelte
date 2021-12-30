<svelte:head>
  <title>Hello there!</title>
</svelte:head>
<script>
	import { Router, Link, Route } from "svelte-navigator";
    // paths need to be relative ../
	import MintButton from '../components/MintButton.svelte';
	import Nested from '../components/Nested.svelte';
	import Metadata from '../components/Metadata.svelte';
	import ConnectWallet from '../components/ConnectWallet.svelte';
	export let name = "World";
	let src = '/mroizo.jpeg';
	let string = `art by <strong>Mr. Oizo</strong>`;
	
	const nftMetadata = {
		name: 'Walken_Eric_001',
		mintDate: 'Dec 22, 2021',
		createdBy: '@oizo3000',
		description: 'french alps / summer 2015',
		contract: 'https://etherscan.io/token/0x6cB505DaA67eAd7d67A160a7285444E15CB1Ec78?a=1',
		tags: 'pixel'
	};
</script>

<main>
	<h1>Hello {name.toUpperCase()}!</h1>
	<ConnectWallet/>
	<Nested link={"https://svelte.dev/tutorial"}/>
	<img {src} alt="Artwork to display">
	<p>{@html string}</p>
	<MintButton/>
	<Metadata {...nftMetadata}/>
</main>

<!-- styles are scoped to the component by default -->
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	img {
		max-width: 70%;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 900;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>