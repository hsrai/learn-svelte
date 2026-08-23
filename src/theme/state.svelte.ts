export type Mode = "day" | "night";
export type Contrast = "soft" | "standard" | "high";
export type Vibrancy = "muted" | "balanced" | "vibrant";
export type Density = "compact" | "normal" | "spacious";
export type Corners = "sharp" | "rounded" | "smooth";

class ThemeState {
	hue = $state(150);
	chroma = $state(0.17);

	vibrancy = $state<Vibrancy>("balanced");
	mode = $state<Mode>("day");
	contrast = $state<Contrast>("standard");

	scale = $state("1");
	density = $state<Density>("normal");
	corners = $state<Corners>("rounded");

	preset = $state("Emerald");
}

export const theme = new ThemeState();

export const presets = {
	Slate: { hue: 250, chroma: 0.02 },
	Crimson: { hue: 25, chroma: 0.18 },
	Gold: { hue: 95, chroma: 0.16 },
	Emerald: { hue: 150, chroma: 0.17 },
	Teal: { hue: 185, chroma: 0.15 },
	Sapphire: { hue: 255, chroma: 0.18 },
	Magenta: { hue: 330, chroma: 0.20 }
};

export function applyPreset(name: keyof typeof presets) {
	const p = presets[name];
	theme.preset = name;
	theme.hue = p.hue;
	theme.chroma = p.chroma;
}
