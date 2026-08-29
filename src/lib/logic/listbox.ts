export interface ListboxItem {
	label: string;
	value: string;
	colour?: string;
}

export function currentIndex(
	items: ListboxItem[],
	value: string
): number {
	const index = items.findIndex(
		(item) => item.value === value
	);

	return index >= 0 ? index : 0;
}

export function nextIndex(
	items: ListboxItem[],
	index: number
): number {
	if (items.length === 0) return -1;

	return (index + 1) % items.length;
}

export function previousIndex(
	items: ListboxItem[],
	index: number
): number {
	if (items.length === 0) return -1;

	return (index - 1 + items.length) % items.length;
}

export function handleListboxKey(
	key: string,
	items: ListboxItem[],
	index: number
): number {
	switch (key) {
		case "ArrowDown":
			return nextIndex(items, index);

		case "ArrowUp":
			return previousIndex(items, index);

		case "Home":
			return 0;

		case "End":
			return Math.max(0, items.length - 1);

		default:
			return index;
	}
}
