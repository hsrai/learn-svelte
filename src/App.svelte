<script lang="ts">
	import Card from "./lib/ui/Card.svelte";
	import ThemeDialog from "./lib/ui/ThemeDialog.svelte";

	import { theme } from "./theme/state.svelte";
	import { applyTheme } from "./theme/derive";

	let showTheme = $state(false);

	$effect(() => {
		theme;
		applyTheme();
	});
</script>

<main class="page">

	<header class="topbar">
		<h1>Hukamnama</h1>

		<button onclick={() => showTheme = true}>
			Theme
		</button>
	</header>

	<Card title="Sri Harmandir Sahib">
		This card uses the global design system.
	</Card>

</main>

{#if showTheme}
	<ThemeDialog onClose={() => showTheme = false}/>
{/if}
