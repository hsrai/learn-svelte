<script lang="ts">
	let {
		label = "Prism Theme Studio",
		class: className = ""
	}: {
		label?: string | null;
		class?: string;
	} = $props();
</script>

<svg
	class={className}
	viewBox="0 0 360 360"
	role={label ? "img" : undefined}
	aria-label={label ?? undefined}
	aria-hidden={label ? undefined : "true"}
	focusable="false"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="180" cy="180" r="154" fill="currentColor" opacity="0.07" />
	<path d="M90 50H50v40M270 50h40v40M90 310H50v-40M270 310h40v-40" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
	<rect x="84" y="92" width="192" height="176" rx="24" fill="none" stroke="currentColor" stroke-width="8" />
	<path d="M84 132h192" fill="none" stroke="currentColor" stroke-width="8" />
	<circle cx="111" cy="112" r="7" fill="currentColor" />
	<circle cx="134" cy="112" r="7" fill="currentColor" opacity="0.65" />
	<circle cx="157" cy="112" r="7" fill="currentColor" opacity="0.35" />
	<circle cx="144" cy="188" r="39" fill="currentColor" opacity="0.85" />
	<circle cx="187" cy="188" r="39" fill="currentColor" opacity="0.55" />
	<circle cx="165.5" cy="222" r="39" fill="currentColor" opacity="0.3" />
	<path d="M222 170h28M222 190h28M222 210h20" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
</svg>
