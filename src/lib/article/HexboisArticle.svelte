<script lang="ts">
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import Article from './Article.svelte';
	import hexboisLogo from '$asset/image/hexbois-logo.png';
  import hexboisThumbnail from '$asset/image/hexbois-thumbnail.png';
	import { timeSince } from '$lib/util/time-display';
	import LiveIndicator from '$lib/LiveIndicator.svelte';

  const formatNumberCompact = Intl.NumberFormat('en', { notation: 'compact' }).format;
	let numberOfPlayers: number | undefined;
	let updatedTimeAgo = '-';
	const API_URL_PRODUCTION = 'https://hexbois.com/api/public';
	const API_URL_DEVELOPMENT = 'http://localhost:8080/api/public';
	const API_URL = dev ? API_URL_DEVELOPMENT : API_URL_PRODUCTION;

	onMount(async () => {
		const response = await fetch(`${API_URL}/usage`);
		const data = await response.json();
		const { players, waiters, browsers } = data;
		numberOfPlayers = players + waiters + browsers;
	});

	onMount(async () => {
		const response = await fetch(`${API_URL}/changelog/newest`);
		const data = await response.json();
		updatedTimeAgo = `updated ${timeSince(new Date(data.released))} ago`;
	});
</script>

<Article color="#f0fbff" info={updatedTimeAgo} href="https://hexbois.com" thumbnailImgSrc={hexboisThumbnail}>
	<img class="hexbois-image" src={hexboisLogo} alt="HEX BOIS" />
	<span class="number-of-players">
		<LiveIndicator />
    {#if numberOfPlayers === undefined}
      ? online
    {:else}
		  {formatNumberCompact(numberOfPlayers)} online
    {/if}
	</span>

	<p>
		Build your empire of hexagons! Destroy other players in fast paced multiplayer battles. Manage
		your money, defences and enemies as your empire grows!
	</p>
</Article>

<style lang="scss">
	.hexbois-image {
		height: 40px;

		@media screen and (max-width: 600px) {
			height: 30px;
		}
	}

	.number-of-players {
		float: right;
	}
</style>
