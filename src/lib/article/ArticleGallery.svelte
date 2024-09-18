<div class="gallery">
	<slot />
</div>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: auto auto;
		gap: 1.5rem;

		@media screen and (max-width: 900px) {
			grid-template-columns: auto;
		}
	}
</style>
