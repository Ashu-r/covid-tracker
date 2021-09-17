import Vue from 'vue';
import App from './App.vue';
import store from './store';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-select/dist/vue-select.css';

import vSelect from 'vue-select';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('v-select', vSelect);

new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app');
