<script lang="ts">
	import Article from '../Article.svelte';

	import voxorpLogo from '$asset/image/voxorp-logo.png';
	import voxorpBW1 from '$asset/image/voxorp-bw-1.png';
	import VoxorpHowToPlay from './VoxorpHowToPlay.svelte';
	import { dev } from '$app/environment';
	import Changelog, { type IChangelogUpdate } from '$lib/Changelog.svelte';
	import VoxorpBuiltWith from './VoxorpBuiltWith.svelte';
	import ArticleImage from '../ArticleImage.svelte';

	const API_URL_PRODUCTION = 'https://voxorp.com/api/changelog';
	const API_URL_DEVELOPMENT = 'http://localhost:8080/api/changelog';
	const API_URL = dev ? API_URL_DEVELOPMENT : API_URL_PRODUCTION;
	let updates: IChangelogUpdate[] = [];
</script>

<Article color="#fff0f8" info="2020-2022" href="https://voxorp.com">
	<img class="voxorp-image" src={voxorpLogo} alt="Voxorp" />
	<p>
		First released in August 2020 and completed through updates over the next two years, Voxorp
		focuses on giving players a massive open world where they can build bases together and battle
		other players for resources.
	</p>
	<h4>How to play</h4>
	<VoxorpHowToPlay />
	<h4>Built with ❤️ + 💻</h4>
	<div class="container">
		<div class="column">
			<VoxorpBuiltWith />
		</div>
		<div class="column">
			<ArticleImage src={voxorpBW1} alt="View of Voxorp's developer tools" />
			<h4>{updates.length} updates over 2 years</h4>
			<Changelog href={API_URL} bind:updates />
		</div>
	</div>
</Article>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: auto auto;
		gap: 1rem;

		@media screen and (max-width: 600px) {
			grid-template-columns: auto;
		}
	}

	.voxorp-image {
		height: 40px;

		@media screen and (max-width: 600px) {
			height: 30px;
		}
	}

	h4 {
		font-size: 1.4rem;
		margin: 0;
	}
</style>
