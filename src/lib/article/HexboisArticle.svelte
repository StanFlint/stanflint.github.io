<script lang="ts">
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	import Article from './Article.svelte';
	import hexboisLogo from '$asset/image/hexbois-logo.png';
	import { timeSince } from '$lib/util/time-display';

	let numberOfPlayers = '-';
	let updatedTimeAgo = '-';
	const API_URL_PRODUCTION = 'https://hexbois.com/api/public';
	const API_URL_DEVELOPMENT = 'http://localhost:8080/api/public';
	const API_URL = dev ? API_URL_DEVELOPMENT : API_URL_PRODUCTION;

	onMount(async () => {
		const response = await fetch(`${API_URL}/usage`);
		const data = await response.json();
		const { players, queuers } = data;
		numberOfPlayers = `${players + queuers}`;
	});

	onMount(async () => {
		const response = await fetch(`${API_URL}/changelog/newest`);
		const data = await response.json();
		updatedTimeAgo = `updated ${timeSince(new Date(data.released))} ago`;
	});
</script>

<Article color="#f0fbff" info={updatedTimeAgo} href="https://hexbois.com" highlight>
	<img class="hexbois-image" src={hexboisLogo} alt="HEX BOIS" />
	<span class="number-of-players">
		<span class="live-circle" />
		<span style="color: red">live</span>
		{numberOfPlayers} online
	</span>
	<div class="image screenshot1" />
	<div class="image screenshot2" />
	<div class="image screenshot3" />
	<div class="image screenshot4" />

	<p>
		Build your empire of hexagons! Destroy other players in fast paced multiplayer battles. Manage
		your money, defences and enemies as your empire grows!
	</p>

	<p>
		With its simple yet addictive gameplay, HEX BOIS has reached <b>over 500,000 players</b>.
		Purchase hexagons to place on the board, making sure to balance your production of cash-flow
		with your defences.
	</p>

	<h3>Account system</h3>
	<p>
		HEX BOIS has its own accounts system built on Google's SSO. Players with an account are able to
		customize the colour of their hexagons as well as purchase 'skins' in the <a
			href="https://hexbois.com/shop"
			target="_blank"
			rel="noreferrer">shop</a
		> to add images to their hexagons. These purchases help the game's development. The account system
		also allows for fine tune moderation controls within the game as well as other cool features like
		switching devices during a match.
	</p>
	<p>
		To keep the barrier of entry to play as low as possible, accounts are optional, players are
		encouraged to create one, but all gameplay is available to 'guests' and playing is as easy as
		picking a name and pressing play!
	</p>

	<h3>Mobile compatibility</h3>
	<p>
		With a modern, responsive website HEX BOIS fully supports the mobile gaming experience, all from
		within the browser, on the same website as desktop players. This means HEX BOIS is available to
		everyone, from the same codebase!
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

	.live-circle {
		background-color: red;
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 100%;
		animation: live-flash 3s linear infinite;
		margin: 0.1rem 0.15rem;
		outline: 7px solid rgba(255, 0, 0, 0.5);
	}

	.screenshot1 {
		background-image: url('$asset/image/hexbois-screenshot-1.webp');
	}

	.screenshot2 {
		background-image: url('$asset/image/hexbois-screenshot-2.webp');
	}

	.screenshot3 {
		background-image: url('$asset/image/hexbois-screenshot-3.webp');
	}

	.screenshot4 {
		height: 28vw;
		max-height: 11.5rem;
		background-image: url('$asset/image/hexbois-screenshot-4.webp');
	}

	.image {
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center;
		float: right;
		clear: both;
		margin: 0 0 1rem 1rem;
		border-radius: 8px;
		max-width: 16rem;
		max-height: 9rem;
		height: 22vw;
		width: 40vw;
	}

	@keyframes live-flash {
		0%,
		70% {
			outline-width: 0px;
			outline-color: rgba(255, 0, 0, 0.7);
		}
		100% {
			outline-width: 5px;
			outline-color: rgba(255, 0, 0, 0);
		}
	}
</style>
