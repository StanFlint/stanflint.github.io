<script lang="ts">
	import { onMount } from 'svelte';
	import Article from './Article.svelte';
	import voxorpLogo from '$asset/image/voxorp-logo.png';
	import voxorpThumbnail from '$asset/image/voxorp-thumbnail.png';
	import LiveIndicator from '$lib/LiveIndicator.svelte';

	const formatNumberCompact = Intl.NumberFormat('en', { notation: 'compact' }).format;
	let numberOfPlayers: number | undefined;

	onMount(async () => {
		try {
			const response = await fetch('https://voxorp.com/api/servers');
			if (!response.ok) {
				return;
			}
			const servers = await response.json();
			numberOfPlayers = Array.isArray(servers)
				? servers.reduce((sum, s) => sum + (s?.players ?? 0), 0)
				: undefined;
		} catch {
			// Leave numberOfPlayers undefined on error - UI will show "? online"
		}
	});
</script>

<Article
	color="#fff0f8"
	info="2020-2022"
	href="https://voxorp.com"
	thumbnailImgSrc={voxorpThumbnail}
>
	<img class="voxorp-image" src={voxorpLogo} alt="Voxorp" />
	<span class="number-of-players">
		<LiveIndicator />
		{#if numberOfPlayers === undefined}
			? online
		{:else}
			{formatNumberCompact(numberOfPlayers)} online
		{/if}
	</span>

	<p>
		Take command of your spaceship! Mine resources, build a base and battle other players or form
		alliances in this multiplayer web game.
	</p>
</Article>

<style lang="scss">
	.voxorp-image {
		height: 40px;

		@media screen and (max-width: 600px) {
			height: 30px;
		}
	}

	.number-of-players {
		float: right;
	}
</style>
