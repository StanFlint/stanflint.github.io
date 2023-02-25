<script>
	import voxorpHTP1 from '$asset/image/voxorp-htp-1.png';
	import voxorpHTP2 from '$asset/image/voxorp-htp-2.png';
	import voxorpHTP3 from '$asset/image/voxorp-htp-3.png';
</script>

<div class="container">
	<div class="box">
		<img src={voxorpHTP1} alt="How to play Voxorp, mine resources" />
		<div class="overlay">
			<span>Mine resources</span>
		</div>
	</div>
	<div class="box">
		<img src={voxorpHTP2} alt="How to play Voxorp, build your base" />
		<div class="overlay">
			<span>Build your base</span>
		</div>
	</div>
	<div class="box">
		<img src={voxorpHTP3} alt="How to play Voxorp, battle other players" />
		<div class="overlay">
			<span>Battle other players</span>
		</div>
	</div>
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

		.box {
			position: relative;

			img {
				display: block;
				border-radius: 0.8rem;
				width: 100%;
				max-height: 200px;
				// max-width: 100%;
				object-fit: cover;
			}

			.overlay {
				position: absolute;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.4);
				bottom: 0;
				left: 0;
				border-radius: 0 0 0.8rem 0.8rem;
				text-align: center;
			}

			span {
				padding: 1rem;
				color: white;
				font-weight: bold;
				font-size: 1rem;
			}
		}
	}
</style>
