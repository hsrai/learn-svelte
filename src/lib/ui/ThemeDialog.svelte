<script lang="ts">
	import "../styles/dialog.css";

	import Listbox from "./Listbox.svelte";
	import Segmented from "./Segmented.svelte";

	import {
		theme,
		presets,
		applyPreset,
		isPresetName,
		markCustom
	} from "../../theme/state.svelte";

	let {
		onClose
	}: {
		onClose: () => void;
	} = $props();

	let previewing = $state(false);

	const presetItems = Object.entries(presets).map(
		([name, preset]) => ({
			label: name,
			value: name,
			colour:
				`oklch(.70 ${preset.chroma} ${preset.hue})`
		})
	);

	function selectPreset(value: string) {
		if (isPresetName(value)) {
			applyPreset(value);
		}
	}

	function beginColourPreview() {
		previewing = true;
	}

	function endColourPreview() {
		previewing = false;
	}
</script>

<div class="backdrop">

	<section
		class:previewing
		class="dialog"
		aria-labelledby="theme-title"
	>
		<h2 id="theme-title">Theme</h2>

		<form>

			<fieldset>
				<legend>Colour</legend>

				<Listbox
					label="Preset"
					items={presetItems}
					bind:value={theme.preset}
					onselect={selectPreset}
				/>

				<label>
					Hue {theme.hue}°
					<input
						type="range"
						min="0"
						max="360"
						value={theme.hue}
						oninput={(event) => {
							theme.hue = Number(
								(event.currentTarget as HTMLInputElement).value
							);
							markCustom();
						}}
						onpointerdown={beginColourPreview}
						onpointerup={endColourPreview}
						onpointercancel={endColourPreview}
					/>
				</label>

				<label>
					Chroma {theme.chroma.toFixed(2)}
					<input
						type="range"
						min="0"
						max="0.35"
						step="0.01"
						value={theme.chroma}
						oninput={(event) => {
							theme.chroma = Number(
								(event.currentTarget as HTMLInputElement).value
							);
							markCustom();
						}}
						onpointerdown={beginColourPreview}
						onpointerup={endColourPreview}
						onpointercancel={endColourPreview}
					/>
				</label>

				<Segmented
					label="Vibrancy"
					options={[
						{ label: "Muted", value: "muted" },
						{ label: "Balanced", value: "balanced" },
						{ label: "Vibrant", value: "vibrant" }
					]}
					bind:value={theme.vibrancy}
				/>

			</fieldset>

			<fieldset>
				<legend>Appearance</legend>

				<Segmented
					label="Mode"
					options={[
						{ label: "Day", value: "day" },
						{ label: "Night", value: "night" }
					]}
					bind:value={theme.mode}
				/>

				<Segmented
					label="Contrast"
					options={[
						{ label: "Soft", value: "soft" },
						{ label: "Standard", value: "standard" },
						{ label: "High", value: "high" }
					]}
					bind:value={theme.contrast}
				/>

			</fieldset>

			<fieldset>
				<legend>Geometry</legend>

				<Segmented
					label="Scale"
					options={[
						{ label: "85%", value: "0.85" },
						{ label: "100%", value: "1" },
						{ label: "115%", value: "1.15" }
					]}
					bind:value={theme.scale}
				/>

				<Segmented
					label="Density"
					options={[
						{ label: "Compact", value: "compact" },
						{ label: "Normal", value: "normal" },
						{ label: "Spacious", value: "spacious" }
					]}
					bind:value={theme.density}
				/>

				<Segmented
					label="Corners"
					options={[
						{ label: "Sharp", value: "sharp" },
						{ label: "Rounded", value: "rounded" },
						{ label: "Smooth", value: "smooth" }
					]}
					bind:value={theme.corners}
				/>

			</fieldset>

		</form>

		<button
			type="button"
			onclick={onClose}
		>
			Close
		</button>

	</section>

</div>
