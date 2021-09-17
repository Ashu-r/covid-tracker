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
		mainData: (state) => {
			return state.data;
		},
		currentPage: (state) => {
			return state.currentPage;
		},
		stateNames: (state) => {
			return state?.data?.map((item) => item.state);
		},
		filterStates: (state) => (stateArray) => {
			return state.data.filter((item) => stateArray.includes(item.state));
		},
		filterProperties: (state) => (filterObject) => {
			const comparisonOperatorsHash = {
				'<': function(a, b) {
					return a < b;
				},
				'>': function(a, b) {
					return a > b;
				},
				'=': function(a, b) {
					return a === b;
				},
			};
			console.log(filterObject);
			const comparisonOperator = comparisonOperatorsHash[filterObject.operation];
			return state.data.filter((item) => comparisonOperator(item[filterObject.property], filterObject.value));
		},
	},
});

export default store;
