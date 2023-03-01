<slot />

<style lang="scss">
	@font-face {
		font-family: Poppins;
		src: url('$asset/font/Poppins-Regular.ttf');
	}

	@font-face {
		font-family: Poppins;
		font-weight: 700;
		src: url('$asset/font/Poppins-Bold.ttf');
	}

	:global(html, body) {
		margin: 0;
		height: 100%;
		font-family: Poppins;

    --grey: #606060;
	}
</style>
