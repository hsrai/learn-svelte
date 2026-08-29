<script module lang="ts">
	let nextGroupId = 0;
</script>

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

	const groupName = `segmented-${nextGroupId++}`;
</script>

<fieldset class="segmented">
	<legend>{label}</legend>

	<div class="segmented-control">
		{#each options as option}
			<label>
				<input
					type="radio"
					name={groupName}
					value={option.value}
					bind:group={value}
				/>
				<span>{option.label}</span>
			</label>
		{/each}
	</div>
</fieldset>
