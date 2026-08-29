<script lang="ts">
	import "../styles/segmented.css";

	type Option = {
		label: string;
		value: string;
	};

	let {
		label,
		options,
		value = $bindable()
	}: {
		label: string;
		options: Option[];
		value: string;
	} = $props();
</script>

<fieldset class="segmented">
	<legend>{label}</legend>

	<div class="segmented-control">
		{#each options as option}
			<button
				type="button"
				class:selected={option.value === value}
				aria-pressed={option.value === value}
				onclick={() => value = option.value}
			>
				{option.label}
			</button>
		{/each}
	</div>
</fieldset>
