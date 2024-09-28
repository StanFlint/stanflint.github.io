<script lang="ts">
	import HeaderContent from '$lib/HeaderContent.svelte';
	import FooterContent from '$lib/FooterContent.svelte';

	import ScrollBanner from '$lib/ScrollBanner.svelte';
	import ArticleGallery from '$lib/article/ArticleGallery.svelte';
	import HexboisArticle from '$lib/article/HexboisArticle.svelte';
	import VoxorpArticle from '$lib/article/VoxorpArticle.svelte';
</script>

<div class="page">
	<header>
		<HeaderContent />
	</header>
	<main>
		<section>
			<ScrollBanner title="THE HEADLINES" />
			<div class="centred">
				<ArticleGallery>
					<HexboisArticle />
					<VoxorpArticle />
				</ArticleGallery>
			</div>
		</section>
	</main>
	<footer>
		<FooterContent />
	</footer>
</div>

<style lang="scss">
	header,
	footer,
	.centred {
		margin: auto;
		padding: 1.5rem;
		box-sizing: border-box;
		width: 100%;
		max-width: 900px;
	}

	main {
		flex: 1;
	}

	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
