<script lang="ts">
  import Card from "./lib/Card.svelte";
  import ThemePanel from "./ThemePanel.svelte";

  import { applyTheme } from "./theme/derive";
  import { theme } from "./theme/state.svelte";

  let pageTitle = $state("Hukamnama");
  let showTheme = $state(false);

  $effect(() => {
    // establish dependencies
    theme.hue;
    theme.chroma;
    theme.vibrancy;
    theme.mode;
    theme.contrast;
    theme.scale;
    theme.density;
    theme.corners;

    applyTheme();
  });
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<main class="page">

	<header class="topbar">
		<h1>Hukamnama</h1>

		<button
			class="theme-toggle"
			onclick={() => showTheme = !showTheme}
			aria-expanded={showTheme}
		>
			{showTheme ? "Hide Theme" : "Show Theme"}
		</button>
	</header>

	{#if showTheme}
		<section class="panel">
			<ThemePanel/>
		</section>
	{/if}

	<Card title="Sri Harmandir Sahib">
		This card automatically follows the global theme.
	</Card>

</main>

<style>
	.page{
		max-width:48rem;
		margin:auto;
		padding:var(--space-lg);
		display:grid;
		gap:var(--space-lg);
	}

	.topbar{
		display:flex;
		justify-content:space-between;
		align-items:center;
	}

	.panel{
		padding:var(--space-md);
		border:1px solid var(--color-border);
		border-radius:var(--radius-lg);
		background:var(--color-surface);
	}

	.theme-toggle{
		padding:.45rem .8rem;
	}
</style>
