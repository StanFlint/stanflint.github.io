<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="box">
	<img {src} {alt} />
	<div class="overlay">
		<span>{alt}</span>
	</div>
</div>

<style lang="scss">
	.box {
		margin: 1rem 0;
		position: relative;

		img {
			display: block;
			border-radius: 0.6rem;
			width: 100%;
			max-height: 200px;
			object-fit: cover;
		}

		.overlay {
			position: absolute;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.4);
			bottom: 0;
			left: 0;
			border-radius: 0 0 0.6rem 0.6rem;
			text-align: center;
		}

		span {
			padding: 1rem;
			color: white;
			font-weight: bold;
			font-size: 1rem;
		}
	}
</style>
