<div class="gallery">
	<slot />
</div>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;

		@media screen and (max-width: 900px) {
			grid-template-columns: auto;
		}
	}
</style>
