import Vue, { VueConstructor } from 'vue';

import Hello from './components/Hello.vue';

function install(vue: VueConstructor<Vue>) {
	vue.component('Hello', Hello);
}

declare global {
	interface Window {
		Vue: VueConstructor<Vue>;
	}
}
if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
};
