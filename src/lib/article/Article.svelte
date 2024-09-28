<script lang="ts">
  export let thumbnailImgSrc: string
	export let color = 'black';
	export let href = '/';
	export let info = '';
	export let highlight = false;
</script>

<article class="{highlight ? 'highlight' : ''}  article" style="--color:{color}">
  <div class="thumbnail">
    <img src={thumbnailImgSrc} alt="thumbnail" />
  </div>
	<div class="content">
		<slot />
    <div class="bottom">
      <span class="info">{info}</span>
      <a {href} class="read-more">check it out ↗</a>
    </div>
	</div>
</article>

<style lang="scss">
	.article {
		background-color: var(--color);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		position: relative;

		&.highlight {
			border: 2px solid red;

			&::before {
				content: 'current project';
				position: absolute;
				top: 0;
				left: 0;
				transform: translate(-100%) rotate(270deg);
				transform-origin: bottom right;
				background-color: red;
				padding: 0 0.4rem;
				border-radius: 0.2rem 0.2rem 0 0;
				color: white;
				font-size: 0.9rem;
			}
		}
	}

  .thumbnail {
    width: 100%;

    img {
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
  }

	.content {
		padding: 1rem;
	}
  
	.info {
    color: var(--grey);
    float: left;
	}

	.bottom {
		padding-top: 1rem;

		.read-more {
			float: right;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
