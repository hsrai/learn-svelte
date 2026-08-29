<script lang="ts">
	import Card from "./lib/ui/Card.svelte";
	import ThemeFocusLogo from "./lib/ui/ThemeFocusLogo.svelte";
	import ThemeDialog from "./lib/ui/ThemeDialog.svelte";
	import ThemeController from "./theme/ThemeController.svelte";

	let themeOpen = $state(false);
	let themeButton = $state<HTMLButtonElement>();
</script>

<svelte:head>
	<title>Prism Theme Studio</title>
	<meta name="description" content="A responsive design-system specimen for exploring accessible colour, typography, spacing, and interface themes." />
</svelte:head>

<ThemeController />

<a class="skip-link" href="#main-content">Skip to main content</a>

<header class="site-header">
		<div class="site-header__inner">
		<a class="brand" href="/" aria-label="Prism Theme Studio home">
			<span class="brand__mark"><ThemeFocusLogo label={null} /></span>
			<span>Prism</span>
		</a>

		<button bind:this={themeButton} class="theme-trigger" type="button" aria-haspopup="dialog" aria-expanded={themeOpen} onclick={() => (themeOpen = !themeOpen)}>
			<span aria-hidden="true">◐</span> Theme
		</button>
	</div>
</header>

<main id="main-content" class="page">
	<section class="hero" aria-labelledby="page-title">
		<header class="hero__copy">
			<p class="eyebrow">A responsive theme specimen</p>
			<h1 id="page-title">Design that remains clear in every mode</h1>
			<p class="lede">Explore how colour, contrast, scale, spacing, and shape work together across realistic content and interface controls.</p>
			<div class="hero__actions">
				<button type="button" onclick={() => (themeOpen = true)}>Customise the theme</button>
				<a href="#specimen">Review the specimen</a>
			</div>
		</header>

		<figure class="hero__visual">
			<ThemeFocusLogo label="An interface framed by focus marks with overlapping theme colours" />
		</figure>
	</section>

	<section class="feature-grid" aria-label="Theme qualities">
		<Card title="Readable by default"><p>Measured line lengths and consistent rhythm keep long-form content comfortable on phones, tablets, and larger screens.</p></Card>
		<Card title="Built from tokens"><p>Components share semantic colours and spacing, so every preset changes the system rather than styling one isolated element.</p></Card>
		<Card title="Designed to flex"><p>Controls wrap and layouts reflow when users choose larger type or more spacious density settings.</p></Card>
	</section>

	<article id="specimen" class="content">
		<header class="content__header prose">
			<p class="eyebrow">Interface specimen</p>
			<h2>A practical test page for the whole theme</h2>
			<p>A useful theme preview should resemble an ordinary page, not a loose collection of controls. The examples below combine editorial content, structured data, status messages, and a complete form.</p>
		</header>

		<section class="demo-section section-layout" aria-labelledby="typography-title">
			<div class="prose">
				<p class="section-number">01 · Typography</p>
				<h2 id="typography-title">A hierarchy that guides the reader</h2>
				<p>Strong hierarchy helps a reader understand where they are before they read every word. Headings introduce the subject, paragraphs develop it, and supporting styles provide emphasis without overwhelming the page.</p>
				<h3>Comfortable reading at every size</h3>
				<p>Good typography is more than choosing a typeface. Line length, line-height, contrast, and spacing work as a system. This paragraph contains <strong>important information</strong>, <em>gentle emphasis</em>, <mark>a highlighted phrase</mark>, and a <a href="#form">useful link</a>.</p>
				<h3>Details for technical readers</h3>
				<p>Inline values such as <code>--color-primary</code> remain distinct from prose. Keyboard instructions like <kbd>Tab</kbd> and <kbd>Enter</kbd> are recognisable without interrupting the sentence.</p>
			</div>

			<aside class="supporting-stack" aria-label="Typography examples">
				<blockquote>
					<p>A resilient interface does not merely tolerate user preferences; it becomes more useful because of them.</p>
					<cite>Theme Studio design principle</cite>
				</blockquote>
				<section class="specimen-card">
					<h3>Type specimen</h3>
					<p class="specimen-display">Aa</p>
					<p><strong>Strong text</strong> supports quick scanning.</p>
					<p><small>Supporting text remains comfortably legible.</small></p>
				</section>
			</aside>
		</section>

		<section class="demo-section section-layout" aria-labelledby="structure-title">
			<div class="prose">
				<p class="section-number">02 · Structure</p>
				<h2 id="structure-title">Content that is easy to scan</h2>
				<p>Lists and definitions reveal whether indentation, markers, and spacing remain balanced across density settings. They should feel connected to the surrounding text without becoming visually cramped.</p>
				<h3>Review a theme in four steps</h3>
				<ol>
					<li>Choose a colour preset as a starting point.</li>
					<li>Compare day and night modes at several contrast levels.</li>
					<li>Test compact and spacious layouts at each interface scale.</li>
					<li>Check that controls remain readable using keyboard navigation.</li>
				</ol>
			</div>

			<aside class="definition-card" aria-labelledby="tokens-title">
				<h3 id="tokens-title">Core design tokens</h3>
				<dl>
					<div><dt>Hue</dt><dd>The family of colour used throughout the interface.</dd></div>
					<div><dt>Chroma</dt><dd>The perceived intensity of the selected colour.</dd></div>
					<div><dt>Density</dt><dd>The amount of breathing room around content.</dd></div>
				</dl>
			</aside>
		</section>

		<section class="demo-section" aria-labelledby="data-title">
			<div class="section-layout">
				<div class="prose">
					<p class="section-number">03 · Data and code</p>
					<h2 id="data-title">Precise information without visual noise</h2>
					<p>Tables need clear alignment and sufficient contrast, while code samples need room to scroll safely on small devices. Both should remain useful without forcing the entire page beyond the viewport.</p>
				</div>

				<section class="code-sample">
					<h3>Generated theme values</h3>
					<pre><code>const theme = &#123;
  preset: "Emerald",
  mode: "day",
  contrast: "standard",
  scale: 1
&#125;;</code></pre>
				</section>
			</div>

			<!-- svelte-ignore a11y_no_noninteractive_tabindex (keyboard users need to scroll this overflow region) -->
			<div class="table-scroll" role="region" tabindex="0" aria-label="Scrollable theme values table">
				<table>
					<caption>Example theme values</caption>
					<thead><tr><th scope="col">Property</th><th scope="col">Value</th><th scope="col">Purpose</th></tr></thead>
					<tbody>
						<tr><th scope="row">Hue</th><td>150°</td><td>Semantic accent colour</td></tr>
						<tr><th scope="row">Chroma</th><td>0.17</td><td>Balanced colour intensity</td></tr>
						<tr><th scope="row">Scale</th><td>100%</td><td>Default interface sizing</td></tr>
						<tr><th scope="row">Density</th><td>Normal</td><td>Default content spacing</td></tr>
					</tbody>
				</table>
			</div>

			<details>
				<summary>Why use semantic tokens?</summary>
				<p>Semantic names describe an element’s role rather than its literal colour. A surface can therefore adapt to a dark theme without changing the component that consumes it.</p>
			</details>
		</section>

		<section id="form" class="demo-section" aria-labelledby="form-title">
			<div class="section-layout">
				<div class="prose">
					<p class="section-number">04 · Form controls</p>
					<h2 id="form-title">Send feedback about this theme</h2>
					<p>This complete form tests labels, helper text, different input types, selection controls, focus indicators, validation affordances, and button hierarchy in one realistic workflow.</p>
				</div>

				<aside class="checklist-card" aria-labelledby="form-tests-title">
					<h3 id="form-tests-title">What this form tests</h3>
					<ul>
						<li>Labels and helper text</li>
						<li>Keyboard focus</li>
						<li>Touch target sizing</li>
						<li>Long translated values</li>
					</ul>
				</aside>
			</div>

			<form class="demo-form" onsubmit={(event) => event.preventDefault()}>
				<fieldset>
					<legend>Your feedback</legend>
					<div class="form-grid">
						<div class="form-field"><label for="name">Name</label><input id="name" name="name" type="text" autocomplete="name" placeholder="Your name" /></div>
						<div class="form-field"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" inputmode="email" placeholder="name@example.com" /></div>
						<div class="form-field">
							<label for="topic">Feedback category</label>
							<select id="topic" name="topic"><option value="colour">Colour and contrast</option><option value="type">Typography</option><option value="spacing">Spacing and layout</option><option value="controls">Form controls</option></select>
						</div>
						<div class="form-field">
							<label for="rating">Overall rating</label>
							<select id="rating" name="rating"><option value="excellent">Excellent</option><option value="good">Good</option><option value="fair">Needs refinement</option></select>
						</div>
						<div class="form-field form-field--wide">
							<label for="message">Comments</label>
							<textarea id="message" name="message" rows="5" placeholder="Tell us what worked well and what could be clearer"></textarea>
							<small>Do not include private or sensitive information.</small>
						</div>
					</div>

					<label class="check-field"><input type="checkbox" name="follow-up" /><span>I am happy to be contacted about this feedback.</span></label>
				</fieldset>

				<div class="form-actions"><button type="reset" class="button-secondary">Clear form</button><button type="submit">Send feedback</button></div>
			</form>
		</section>
	</article>
</main>

<footer class="site-footer">
	<div><strong>Prism Theme Studio</strong><p>A device-independent specimen built with semantic HTML and design tokens.</p></div>
	<a href="#main-content">Back to top</a>
</footer>

<ThemeDialog bind:open={themeOpen} returnFocus={themeButton} />
