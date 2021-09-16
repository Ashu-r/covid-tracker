import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		data: null,
		currentPage: 1,
	},
	mutations: {
		initialize(state, payload) {
			const cleanedData = Object.keys(payload).map((key) => ({
				state: key,
				...payload[key].total,
			}));
			console.log(cleanedData);
			state.data = cleanedData;
		},
		changePage(state, page) {
			state.currentPage = page;
		},
	},
	actions: {
		initialize({ commit }, payload) {
			commit('initialize', payload);
		},
	},
	getters: {
		totalCases: (state) => {
			return state.data;
		},
		currentPage: (state) => {
			return state.currentPage;
		},
	},
});

export default store;
