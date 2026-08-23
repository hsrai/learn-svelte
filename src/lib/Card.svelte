<script lang="ts">
	let { title = "", children } = $props();
</script>

<article class="card">
	<h2>{title}</h2>

	<div class="body">
		{@render children?.()}
	</div>
</article>

<style>
	.card{
		background:var(--color-surface);
		border:1px solid var(--color-border);
		border-radius:var(--radius-lg);
		padding:var(--space-lg);
		box-shadow:var(--shadow);
	}

	h2{
		font-size:var(--text-lg);
		margin-bottom:var(--space-md);
	}

	.body{
		font-size:var(--text-md);
	}
</style>
