<template lang="pug">
	#app
		p {{ text1 }}
		p {{ text2 }}
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

export default Vue.extend({
	name: 'App',
	data() {
		return {
			text1: 'Hello, World!',
			text2: 'Who am I?'
		};
	}
}) as VueConstructor<Vue>;
</script>

<style lang="scss" scoped>
#app {
	p {
		&:first-child {
			color: red;
		}
		&:last-child {
			color: green;
		}
	}
}
</style>
