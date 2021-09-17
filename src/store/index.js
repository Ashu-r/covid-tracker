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
			let filteredData = state;
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
			// console.log(filterObject);
			if (filterObject?.states?.length > 0) {
				console.log(filterObject.states);
				filteredData = state.data.filter((item) => filterObject.states.includes(item.state));
				// console.log(filteredData);
			}
			if (filterObject?.numericFilters && Object.values(filterObject.numericFilters).some((o) => o === null)) {
				const comparisonOperator = comparisonOperatorsHash[filterObject.numericFilters.operation];

				console.log('n filter');
				filteredData = state.data.filter((item) => comparisonOperator(item[filterObject.numericFilters.property], filterObject.numericFilters.value));
			}
			return filteredData;
		},
	},
});

export default store;
