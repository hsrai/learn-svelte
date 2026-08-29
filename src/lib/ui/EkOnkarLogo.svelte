<script lang="ts">
	let {
		label = "Ek Onkar",
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
	<circle cx="180" cy="180" r="156" fill="currentColor" opacity="0.08" />
	<circle cx="180" cy="180" r="134" fill="none" stroke="currentColor" stroke-width="2" opacity="0.28" />
	<circle cx="180" cy="180" r="108" fill="none" stroke="currentColor" stroke-width="1" opacity="0.18" />
	<text
		x="180"
		y="205"
		fill="currentColor"
		font-family="Noto Sans Gurmukhi, Nirmala UI, Raavi, Arial Unicode MS, sans-serif"
		font-size="156"
		font-weight="600"
		text-anchor="middle"
		dominant-baseline="middle"
	>ੴ</text>
</svg>
