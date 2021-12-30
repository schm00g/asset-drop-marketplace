<script>
	export let name;
	export let mintDate;
	export let createdBy;
	export let description;
    export let contract;
	export let tags;
</script>

<main>
    <p><code>{name}</code> by {createdBy}.</p>
    <p>{description} {tags}</p>
    <p>Minted on {mintDate} see <a href={contract}>contract scan</a></p>
</main>
