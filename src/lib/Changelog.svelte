<script context="module" lang="ts">
	type VersionCode = `v${number}.${number}` | `v${number}.${number}.${number}`;
	type VideoLink = `https://youtube.com/embed/${string}`;

	interface IChangelogSection {
		title: string;
		points: string[];
	}

	export interface IChangelogUpdate {
		title: string;
		description?: string;
		image?: string;
		video?: VideoLink;
		version: VersionCode;
		released: Date;
		sections: IChangelogSection[];
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let href = '/';
	export let updates: IChangelogUpdate[] = [];

	function getFormattedDate(date: Date): string {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}

	onMount(async () => {
		const response = await fetch(href);
		updates = await response.json();
	});
</script>

<div class="container">
	{#each updates as { title, version, released }}
		<div class="entry">
			<span class="version">{version}</span>
			{@html title}
			<span class="date">{getFormattedDate(new Date(released))}</span>
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		max-height: 200px;
		max-width: 420px;
		overflow-y: auto;
		padding-right: 0.5rem;
		border-radius: 0.6rem;
	}

	.entry {
		clear: both;
	}

	.version {
		color: #737373;
	}

	.date {
		float: right;
	}
</style>
