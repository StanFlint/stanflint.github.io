<script lang="ts">
	import Article from '../Article.svelte';
	import voxorpLogo from '$asset/image/voxorp-logo.png';
  import voxorpThumbnail from '$asset/image/voxorp-thumbnail.png';
</script>

<Article color="#fff0f8" info="2020-2022" href="https://voxorp.com" thumbnailImgSrc={voxorpThumbnail}>
	<img class="voxorp-image" src={voxorpLogo} alt="Voxorp" />
	<p>
		Take command of your spaceship! Mine resources, build a base and battle other players or form alliances in this multiplayer web game.
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
