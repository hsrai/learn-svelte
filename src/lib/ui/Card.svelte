<script lang="ts">
	import "../styles/card.css";

	let { title, children } = $props();
</script>

<article class="card">

	<h2>{title}</h2>

	{@render children?.()}

</article>
