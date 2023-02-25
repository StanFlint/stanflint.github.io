<script>
	import Article from '../Article.svelte';

	import voxorpLogo from '$asset/image/voxorp-logo.png';
	import VoxorpHowToPlay from './VoxorpHowToPlay.svelte';
</script>

<Article color="#fff0f8" info="2020-2022" href="https://voxorp.com">
	<img class="voxorp-image" src={voxorpLogo} alt="Voxorp" />
	<p>
		First released in August 2020 and completed through updates over the next two years, Voxorp
		focuses on giving players a massive open world where they can build bases together and battle
		other players for resources.
	</p>

	<VoxorpHowToPlay />
</Article>

<style lang="scss">
	.voxorp-image {
		height: 40px;

		@media screen and (max-width: 600px) {
			height: 30px;
		}
	}
</style>
