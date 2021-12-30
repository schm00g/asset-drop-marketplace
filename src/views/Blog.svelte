<script>
    const urlPath = window.location.pathname;
</script>

<main>
	<h1>{urlPath}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 000;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>