<script lang="ts">
	import { theme, presets, applyPreset } from "./theme/state.svelte";
</script>

<details open>
	<summary>Theme Controls</summary>

	<form>

		<fieldset>
			<legend>Colour</legend>

			<label>
				Preset
				<select
					bind:value={theme.preset}
					onchange={() => applyPreset(theme.preset as keyof typeof presets)}
				>
					{#each Object.keys(presets) as p}
						<option>{p}</option>
					{/each}
				</select>
			</label>

			<label>
				Hue {theme.hue}°
				<input type="range" min="0" max="360" bind:value={theme.hue}/>
			</label>

			<label>
				Chroma {theme.chroma.toFixed(2)}
				<input type="range" min="0" max="0.35" step="0.01" bind:value={theme.chroma}/>
			</label>

			<label>
				Vibrancy
				<select bind:value={theme.vibrancy}>
					<option value="muted">Muted</option>
					<option value="balanced">Balanced</option>
					<option value="vibrant">Vibrant</option>
				</select>
			</label>
		</fieldset>

		<fieldset>
			<legend>Appearance</legend>

			<label>
				Mode
				<select bind:value={theme.mode}>
					<option value="day">Day</option>
					<option value="night">Night</option>
				</select>
			</label>

			<label>
				Contrast
				<select bind:value={theme.contrast}>
					<option value="soft">Soft</option>
					<option value="standard">Standard</option>
					<option value="high">High</option>
				</select>
			</label>
		</fieldset>

		<fieldset>
			<legend>Geometry</legend>

			<label>
				UI Scale
				<select bind:value={theme.scale}>
					<option value="0.85">85%</option>
					<option value="1">100%</option>
					<option value="1.15">115%</option>
				</select>
			</label>

			<label>
				Density
				<select bind:value={theme.density}>
					<option value="compact">Compact</option>
					<option value="normal">Normal</option>
					<option value="spacious">Spacious</option>
				</select>
			</label>

			<label>
				Corners
				<select bind:value={theme.corners}>
					<option value="sharp">Sharp</option>
					<option value="rounded">Rounded</option>
					<option value="smooth">Smooth</option>
				</select>
			</label>
		</fieldset>

	</form>
</details>

<style>
	details{
		display:grid;
		gap:var(--space-md);
	}

	summary{
		cursor:pointer;
		font-weight:600;
		user-select:none;
	}

	form{
		display:grid;
		gap:var(--space-lg);
		margin-top:var(--space-md);
	}

	fieldset{
		display:grid;
		gap:var(--space-sm);
		padding:var(--space-md);
		border:1px solid var(--color-border);
		border-radius:var(--radius-md);
	}

	label{
		display:grid;
		gap:.25rem;
	}

	input,
	select{
		inline-size:100%;
	}
</style>
