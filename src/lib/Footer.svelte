<footer>
	<div>
		<h3>Contact</h3>
		<a href="mailto:hello@stanflint.dev">hello@stanflint.dev</a>
	</div>
	<div>
		<h3>Socials</h3>
		<a href="https://github.com/StanFlint">GitHub</a>
		<a href="https://twitter.com/StanFlintDev">Twitter</a>
		<a href="https://www.youtube.com/channel/UCdznhGoKl0uCv__ZN7oETtQ">YouTube</a>
	</div>
	<div>
		<h3>Legal</h3>
		<a href="https://hexbois.com/privacy">Privacy</a>
		<a href="https://hexbois.com/terms">Terms</a>
	</div>
</footer>

<style lang="scss">
	footer {
		display: grid;
		grid-template-columns: auto auto auto;
		gap: 1rem;

		a {
			display: block;
		}

		@media screen and (max-width: 600px) {
			grid-template-columns: auto auto;
		}

		@media screen and (max-width: 400px) {
			font-size: 1.1rem;

			h3,
			a {
				padding-bottom: 0.4rem;
			}
		}
	}
</style>
