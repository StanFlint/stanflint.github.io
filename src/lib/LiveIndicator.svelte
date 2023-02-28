<span class="indicator"></span>
<span class="text">live</span>

<style lang="scss">
  .indicator {
    position: relative;
    background-color: red;
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 100%;
		margin: 0.1rem;

    &::before {
      content: "";
      position: absolute;
      background-color: rgba(0, 128, 0, 0.37);
      transform: translate(-50%, -50%);
      border-radius: 100%;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      animation: indicator-keyframes 3s linear infinite;
    }
  }

  .text {
    color: #F00;
  }

  @keyframes indicator-keyframes {
		0%,
		70% {
			width: 8px;
      height: 8px;
			background-color: rgba(255, 0, 0, 0.7);
		}
		100% {
			width: 20px;
      height: 20px;
			background-color: rgba(255, 0, 0, 0);
		}
	}
</style>