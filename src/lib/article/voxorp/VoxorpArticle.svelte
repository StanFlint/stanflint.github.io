<script>
	import Article from '../Article.svelte';

	import voxorpLogo from '$asset/image/voxorp-logo.png';
</script>

<Article color="#fff0f8" info="2020-2022">
	<img class="voxorp-image" src={voxorpLogo} alt="Voxorp" />
	<p>
		With 17 content updates since its release, Voxorp has accrued <b>over 1,000,000 minutes</b> of total
		play time. The game focuses on giving players tools to create their own world in Voxorp's massive
		open multiplayer world.
	</p>
</Article>

<style lang="scss">
	.voxorp-image {
		height: 40px;

		@media screen and (max-width: 600px) {
			height: 30px;
		}
	}
</style>
