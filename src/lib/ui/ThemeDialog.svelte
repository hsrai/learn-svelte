<script lang="ts">
	import "../styles/dialog.css";
	import Segmented from "./Segmented.svelte";

	import {
		theme,
		presets,
		applyPreset,
		isPresetName,
		markCustom
	} from "../../theme/state.svelte";

	let {
		open = $bindable(false),
		returnFocus = null
	}: {
		open?: boolean;
		returnFocus?: HTMLElement | null;
	} = $props();

	let dialog: HTMLDialogElement;
	let previewing = $state(false);

	$effect(() => {
		if (!dialog) return;

		if (open && !dialog.open) {
			dialog.showModal();
		} else if (!open && dialog.open) {
			dialog.close();
		}
	});

	function close() {
		open = false;

		queueMicrotask(() => {
			returnFocus?.focus();
		});
	}

	function onClose() {
		if (open) {
			open = false;
		}

		queueMicrotask(() => {
			returnFocus?.focus();
		});
	}

	function startPreview() {
		previewing = true;
	}

	function stopPreview() {
		previewing = false;
	}

	function selectPreset(name: string) {
		if (isPresetName(name)) {
			applyPreset(name);
		} else if (name === "Custom") {
			theme.preset = "Custom";
		}
	}
</script>

<dialog
	bind:this={dialog}
	class:previewing
	class="theme-dialog"
	aria-labelledby="theme-dialog-title"
	onclose={onClose}
	onclick={(event) => {
		if (event.target === dialog) {
			close();
		}
	}}
>
	<section class="theme-panel">
		<header class="theme-header">
			<h2 id="theme-dialog-title">Theme</h2>

			<button
				type="button"
				class="close-button"
				aria-label="Close theme controls"
				onclick={close}
			>
				×
			</button>
		</header>

		<div class="theme-controls">
			<fieldset>
				<legend>Colour</legend>

				<label class="preset-control">
					<span>Preset</span>
					<span class="preset-select">
						<span
							class="preset-swatch"
							style={`--preset-h:${theme.hue};--preset-c:${theme.chroma}`}
							aria-hidden="true"
						></span>
						<select
							value={theme.preset}
							onchange={(event) => selectPreset(event.currentTarget.value)}
						>
							{#each Object.keys(presets) as preset}
								<option value={preset}>{preset}</option>
							{/each}
							<option value="Custom">Custom</option>
						</select>
					</span>
				</label>

				<label>
					Hue
					<span>{theme.hue}°</span>

					<input
						type="range"
						min="0"
						max="360"
						step="1"
						value={theme.hue}
					oninput={(event) => {
						theme.hue = Number(event.currentTarget.value);
						markCustom();
					}}
						onpointerdown={startPreview}
						onpointerup={stopPreview}
						onpointercancel={stopPreview}
					/>
				</label>

				<label>
					Chroma
					<span>{theme.chroma.toFixed(2)}</span>

					<input
						type="range"
						min="0"
						max="0.35"
						step="0.01"
						value={theme.chroma}
					oninput={(event) => {
						theme.chroma = Number(event.currentTarget.value);
						markCustom();
					}}
						onpointerdown={startPreview}
						onpointerup={stopPreview}
						onpointercancel={stopPreview}
					/>
				</label>

				<Segmented label="Vibrancy" options={[
					{ label: "Muted", value: "muted" },
					{ label: "Balanced", value: "balanced" },
					{ label: "Vibrant", value: "vibrant" }
				]} bind:value={theme.vibrancy} />
			</fieldset>

			<fieldset>
				<legend>Appearance</legend>

				<Segmented label="Mode" options={[
					{ label: "Day", value: "day" },
					{ label: "Night", value: "night" }
				]} bind:value={theme.mode} />

				<Segmented label="Contrast" options={[
					{ label: "Soft", value: "soft" },
					{ label: "Standard", value: "standard" },
					{ label: "High", value: "high" }
				]} bind:value={theme.contrast} />
			</fieldset>

			<fieldset>
				<legend>Geometry</legend>

				<Segmented label="Scale" options={[
					{ label: "85%", value: "0.85" },
					{ label: "100%", value: "1" },
					{ label: "115%", value: "1.15" }
				]} bind:value={theme.scale} />

				<Segmented label="Density" options={[
					{ label: "Compact", value: "compact" },
					{ label: "Normal", value: "normal" },
					{ label: "Spacious", value: "spacious" }
				]} bind:value={theme.density} />

				<Segmented label="Corners" options={[
					{ label: "Sharp", value: "sharp" },
					{ label: "Rounded", value: "rounded" },
					{ label: "Smooth", value: "smooth" }
				]} bind:value={theme.corners} />
			</fieldset>

			<fieldset>
				<legend>Layout</legend>

				<Segmented label="Page layout" options={[
					{ label: "Focused", value: "focused" },
					{ label: "Adaptive", value: "adaptive" },
					{ label: "Wide", value: "wide" }
				]} bind:value={theme.layout} />
			</fieldset>
		</div>

		<footer class="theme-footer">
			<button type="button" onclick={close}>Close</button>
		</footer>
	</section>
</dialog>
