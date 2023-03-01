<script>
	import nodeIcon from '$asset/image/node-logo.png';
	import phaserIcon from '$asset/image/phaser-logo.png';
	import socketIcon from '$asset/image/socket-logo.png';
	import nginxIcon from '$asset/image/nginx-logo.png';
</script>

<p>
	Voxorp's physics, networking and game engine are built from scratch, accompanied with PhaserJS for
	graphics.
</p>

<p>
	The project would not be possible without these <i>amazing</i> open source technologies
</p>

<ul>
	<li>
		<a href="https://nodejs.org/">
			<img src={nodeIcon} alt="NodeJS logo" />
		</a> - the server runtime not only handles all network requests but also runs entire custom game
		engine
	</li>
	<li>
		<a href="https://phaser.io/">
			<img src={phaserIcon} alt="Phaser logo" />
		</a> - handles all things graphics from particle effects to loading images
	</li>
	<li>
		<a href="https://socket.io/">
			<img src={socketIcon} alt="SocketIO logo" />
		</a> - used for reliable, event based, type-safe WebSocket communication
	</li>
	<li>
		<a href="https://www.nginx.com/">
			<img src={nginxIcon} alt="NGINX logo" />
		</a> - a high performance reverse proxy to handle all incoming and outgoing web traffic
	</li>
</ul>

<style lang="scss">
	li {
		list-style: none;
		color: var(--grey);

		&:not(:last-child) {
			padding-bottom: 0.8rem;
		}

		img {
			vertical-align: middle;
			max-height: 1.8rem;
		}
	}
</style>
