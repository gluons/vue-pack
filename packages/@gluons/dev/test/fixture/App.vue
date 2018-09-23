<template lang="pug">
#app
	p {{ text1 }}
	p {{ text2 }}
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

declare const TEXT1: string;

export default Vue.extend({
	name: 'App',
	data() {
		return {
			text1: TEXT1,
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
