<script lang="ts">
	import { applyTheme } from "./derive";
	import {
		isPresetName,
		theme,
		type Contrast,
		type Corners,
		type Density,
		type Mode,
		type PageLayout,
		type PresetSelection,
		type Vibrancy
	} from "./state.svelte";

	const storageKey = "prism-theme-studio";
	const legacyStorageKey = "hukamnama-theme";

	type StoredTheme = {
		hue: number;
		chroma: number;
		vibrancy: Vibrancy;
		mode: Mode;
		contrast: Contrast;
		scale: string;
		density: Density;
		corners: Corners;
		layout: PageLayout;
		preset: PresetSelection;
	};

	const choices = {
		vibrancy: ["muted", "balanced", "vibrant"],
		mode: ["day", "night"],
		contrast: ["soft", "standard", "high"],
		scale: ["0.85", "1", "1.15"],
		density: ["compact", "normal", "spacious"],
		corners: ["sharp", "rounded", "smooth"],
		layout: ["focused", "adaptive", "wide"]
	} as const;

	function includes<T extends string>(values: readonly T[], value: unknown): value is T {
		return typeof value === "string" && values.includes(value as T);
	}

	function restoreTheme() {
		try {
			const raw = localStorage.getItem(storageKey) ?? localStorage.getItem(legacyStorageKey);
			if (!raw) return;

			const stored = JSON.parse(raw) as Partial<StoredTheme>;
			if (typeof stored.hue === "number" && stored.hue >= 0 && stored.hue <= 360) theme.hue = stored.hue;
			if (typeof stored.chroma === "number" && stored.chroma >= 0 && stored.chroma <= 0.35) theme.chroma = stored.chroma;
			if (includes(choices.vibrancy, stored.vibrancy)) theme.vibrancy = stored.vibrancy;
			if (includes(choices.mode, stored.mode)) theme.mode = stored.mode;
			if (includes(choices.contrast, stored.contrast)) theme.contrast = stored.contrast;
			if (includes(choices.scale, stored.scale)) theme.scale = stored.scale;
			if (includes(choices.density, stored.density)) theme.density = stored.density;
			if (includes(choices.corners, stored.corners)) theme.corners = stored.corners;
			if (includes(choices.layout, stored.layout)) theme.layout = stored.layout;
			if (stored.preset === "Custom" || (typeof stored.preset === "string" && isPresetName(stored.preset))) theme.preset = stored.preset;
			localStorage.removeItem(legacyStorageKey);
		} catch {
			localStorage.removeItem(storageKey);
		}
	}

	restoreTheme();

	$effect(() => {
		applyTheme();

		const stored: StoredTheme = {
			hue: theme.hue,
			chroma: theme.chroma,
			vibrancy: theme.vibrancy,
			mode: theme.mode,
			contrast: theme.contrast,
			scale: theme.scale,
			density: theme.density,
			corners: theme.corners,
			layout: theme.layout,
			preset: theme.preset
		};

		localStorage.setItem(storageKey, JSON.stringify(stored));

		const themeColour = getComputedStyle(document.documentElement)
			.getPropertyValue("--color-primary")
			.trim();
		document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
			?.setAttribute("content", themeColour);
	});
</script>
