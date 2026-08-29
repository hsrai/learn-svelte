# Prism Theme Studio

A mobile-first Svelte 5 theme specimen for testing semantic colour, typography,
spacing, density, interface scale, and component geometry against realistic page
content.

## Development

```sh
npm install
npm run dev
```

Quality checks and production build:

```sh
npm run check
npm run build
npm run preview
```

## Structure

- `src/theme/` contains state, semantic CSS tokens, and theme derivation.
- `src/lib/ui/` contains the reusable card and theme controls.
- `src/lib/styles/` contains component and native-control styles.
- `src/App.svelte` is the realistic design-system specimen page.
- `src/pwa/` handles service-worker registration and update prompts.
- `vite.config.ts` defines the generated manifest and offline precache strategy.

The interface uses authored CSS and semantic design tokens; no utility CSS
framework is required.

## PWA behaviour

The production build generates a Workbox service worker containing the final
hashed application assets. Updates prompt before replacing the running version,
and PWA registration is disabled during Vite development to prevent stale assets.

Installability and offline behaviour should be tested from `npm run preview` or
an HTTPS deployment. The production manifest and precache can be validated with:

```sh
npm run check:pwa
```
