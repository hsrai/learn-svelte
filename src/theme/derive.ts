import { theme } from "./state.svelte";

export function applyTheme() {
	const root = document.documentElement;

	const vibrancy =
		theme.vibrancy === "muted"
			? 0.5
			: theme.vibrancy === "vibrant"
				? 1.4
				: 1;

	const C = Math.min(0.35, theme.chroma * vibrancy);

	const delta =
		theme.contrast === "soft"
			? 0.68
			: theme.contrast === "high"
				? 0.88
				: 0.78;

	const bg = theme.mode === "day" ? 0.98 : 0.12;
	const surface = theme.mode === "day" ? 0.95 : 0.18;
	const border = theme.mode === "day" ? 0.86 : 0.28;

	const text =
		theme.mode === "day"
			? Math.max(0.1, bg - delta)
			: Math.min(0.98, bg + delta);

	const density =
		theme.density === "compact"
			? 0.82
			: theme.density === "spacious"
				? 1.25
				: 1;

	const radius =
		theme.corners === "sharp"
			? [0, 0, 0]
			: theme.corners === "smooth"
				? [6, 12, 20]
				: [3, 6, 10];

	root.style.setProperty("--h", `${theme.hue}`);
	root.style.setProperty("--c", `${C}`);

	root.style.setProperty("--bg-L", `${bg}`);
	root.style.setProperty("--surface-L", `${surface}`);
	root.style.setProperty("--border-L", `${border}`);
	root.style.setProperty("--text-L", `${text}`);

	root.style.setProperty("--scale", theme.scale);
	root.style.setProperty("--density", `${density}`);

	root.style.setProperty("--radius-sm", `${radius[0]}px`);
	root.style.setProperty("--radius-md", `${radius[1]}px`);
	root.style.setProperty("--radius-lg", `${radius[2]}px`);
	root.style.colorScheme = theme.mode === "night" ? "dark" : "light";
}
