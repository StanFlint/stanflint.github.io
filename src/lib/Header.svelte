<script>
	import githubIcon from '$asset/image/github-icon.png';
	import twitterIcon from '$asset/image/twitter-icon.png';
	import youtubeIcon from '$asset/image/youtube-icon.png';
</script>

<header>
	<h1>Stan Flint</h1>
	<h2>Scottish indie game developer</h2>
	<div class="social-links">
		<a
			href="https://github.com/StanFlint"
			title="GitHub"
			target="_blank"
			rel="noreferrer"
			class="github"
		>
			<img src={githubIcon} alt="GitHub icon" />
		</a>
		<a
			href="https://twitter.com/StanFlintDev"
			title="Twitter"
			target="_blank"
			rel="noreferrer"
			class="twitter"
		>
			<img src={twitterIcon} alt="Twitter icon" />
		</a>
		<a
			href="https://www.youtube.com/channel/UCdznhGoKl0uCv__ZN7oETtQ"
			title="YouTube"
			target="_blank"
			rel="noreferrer"
			class="youtube"
		>
			<img src={youtubeIcon} alt="YouTube icon" />
		</a>
	</div>
</header>

<style lang="scss">
	h1 {
		margin: 1rem 0 0;
	}

	h2 {
		margin: 0 0 2rem;
		font-weight: normal;
	}

	.social-links {
		* {
			@extend %social-icon;

			display: inline-block;
			margin-right: 0.6rem;
		}

		.github {
			&::before {
				background-image: url('$asset/image/github-icon.png');
			}
		}

		.twitter {
			&::before {
				background-image: url('$asset/image/twitter-icon.png');
			}
		}

		.youtube {
			&::before {
				background-image: url('$asset/image/youtube-icon.png');
			}
		}
	}

	%social-icon {
		@extend %icon-link;

		width: 40px;
		height: 40px;
	}

	%icon-link {
		position: relative;

		&::before {
			content: '';
			position: absolute;
			background-repeat: no-repeat;
			background-size: 100%;
			width: 100%;
			height: 100%;
		}
	}
</style>
