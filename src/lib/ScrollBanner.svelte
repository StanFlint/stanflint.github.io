<script lang="ts">
	import { watchResize } from './util/watch-resize';

	export let title = '';
	export let speed = 50;

	function resize(element: HTMLElement) {
		const animationSpeed = element.clientWidth / speed;
		element.style.animationDuration = `${animationSpeed}s`;
	}
</script>

<div class="banner-background">
	<div class="banner-center">
		<div class="banner-container">
			<h1 class="banner-scroll" use:watchResize={resize}>
				{title}
			</h1>
		</div>
	</div>
</div>

<style lang="scss">
	.banner-background {
		background-image: linear-gradient(to right, #ff00e5, #00c2ff);
	}

	.banner-center {
		margin: auto;
		max-width: 900px;
		width: 100%;
	}

	.banner-container {
		margin: 0 1.5rem;
		overflow: hidden;
	}

	.banner-scroll {
		@extend %banner-scroll-style;
		animation-name: banner-scroll;
		margin: 0px;
	}

	%banner-scroll-style {
		font-size: 2.5rem;
		font-weight: bold;
		font-style: italic;
		color: white;
		white-space: nowrap;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	@keyframes banner-scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
