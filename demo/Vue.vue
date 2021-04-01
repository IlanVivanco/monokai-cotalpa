<template>
	<div id="app">
		<h1>My Todo App!</h1>
		<monokai-colapa />
	</div>
</template>

<script>
import MonokaiColapa from './components/MonokaiColapa.vue'

export default {
	data() {
		return {
			theme: 'Monokai Cotalpa',
		}
	},
	components: {
		MonokaiColapa,
	},
}
</script>

<style lang="scss">
@import './theme-colors.scss';

*,
*::before,
*::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $vue-blue;
}

h1 {
	text-align: center;
}
</style>
