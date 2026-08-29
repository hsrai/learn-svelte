<script lang="ts">
	import "../styles/listbox.css";

	import {
		currentIndex,
		handleListboxKey,
		type ListboxItem
	} from "../logic/listbox";

	const listboxId =
		`listbox-${Math.random().toString(36).slice(2)}`;

	let {
		label,
		items,
		value = $bindable(),
		onselect
	}: {
		label: string;
		items: ListboxItem[];
		value: string;
		onselect?: (value: string) => void;
	} = $props();

	let open = $state(false);
	let highlight = $state(0);

	$effect(() => {
		highlight = currentIndex(items, value);
	});

	function openList() {
		highlight = currentIndex(items, value);
		open = true;
	}

	function closeList() {
		open = false;
	}

	function select(index: number) {
		const selected = items[index];

		if (!selected) return;

		value = selected.value;
		onselect?.(selected.value);

		closeList();
	}

	function onKey(event: KeyboardEvent) {
		if (!open) {
			if (
				event.key === "ArrowDown" ||
				event.key === "ArrowUp" ||
				event.key === "Enter" ||
				event.key === " "
			) {
				event.preventDefault();
				openList();
			}

			return;
		}

		switch (event.key) {
			case "Escape":
				event.preventDefault();
				closeList();
				return;

			case "Enter":
			case " ":
				event.preventDefault();
				select(highlight);
				return;

			default:
				highlight = handleListboxKey(
					event.key,
					items,
					highlight
				);
		}
	}
</script>

<div class="listbox">

	<label for={listboxId}>{label}</label>

	<button
		id={listboxId}
		type="button"
		class="trigger"
		aria-haspopup="listbox"
		aria-expanded={open}
		onclick={() => open ? closeList() : openList()}
		onkeydown={onKey}
	>
		<span class="left">
			<span
				class="swatch"
				style={`background:${items.find(
					(item) => item.value === value
				)?.colour ?? "transparent"}`}
			></span>

			{items.find(
				(item) => item.value === value
			)?.label}
		</span>

		<span aria-hidden="true">▾</span>
	</button>

	{#if open}
		<ul role="listbox">
			{#each items as item, index}
				<li
					role="option"
					aria-selected={item.value === value}
				>
					<button
						type="button"
						class:selected={index === highlight}
						onclick={() => select(index)}
						onmouseenter={() => highlight = index}
					>
						<span
							class="swatch"
							style={`background:${item.colour ?? "transparent"}`}
						></span>

						{item.label}
					</button>
				</li>
			{/each}
		</ul>
	{/if}

</div>
