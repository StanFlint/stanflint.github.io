<script>
	import ArticleImage from '../ArticleImage.svelte';
	import voxorpHTP1 from '$asset/image/voxorp-htp-1.png';
	import voxorpHTP2 from '$asset/image/voxorp-htp-2.png';
	import voxorpHTP3 from '$asset/image/voxorp-htp-3.png';
</script>

<div class="container">
	<ArticleImage src={voxorpHTP1} alt="Mine resources" />
	<ArticleImage src={voxorpHTP2} alt="Build your base" />
	<ArticleImage src={voxorpHTP3} alt="Battle other players" />
</div>

<style lang="scss">
	.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr 1fr;
		margin-bottom: 1rem;

		@media screen and (max-width: 600px) {
			grid-template-columns: 1fr;
		}
	}
</style>
