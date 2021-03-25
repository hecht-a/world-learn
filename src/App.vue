<template>
	<div id="nav" style="user-select: none">
		<div class="img">
			<img src="/img/logo.82b9c7a5.png" alt="Vue logo" />
		</div>
		<div class="menu">
			<router-link to="/">Home</router-link>
			<router-link to="/game">Game</router-link>
			<router-link to="/list">Countries List</router-link>
		</div>
	</div>
	<router-view />
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

body {
	background: #f1f2f6;
	margin: 0;
	padding: 0;
}

#nav {
	padding: 10px;
	display: flex;
	background-color: #ced6e0;
	justify-content: flex-end;
	flex-direction: row;
	align-items: center;

	.menu {
		margin: 0 20px 0 0;
	}

	.img {
		margin: 0 auto 0 2em;
		img {
			width: 80px;
			height: 80px;
		}
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		margin: auto 1em;
		font-size: 20px;

		&.router-link-exact-active {
			color: #3742fa;
		}
	}
}

@media screen and (max-width: 900px) {
	#nav {
		flex-direction: column;
		justify-content: center;

		.menu {
			margin: 0;
			justify-content: center;
			align-items: center;
		}

		.img {
			margin: 0;
		}
	}
}
</style>
