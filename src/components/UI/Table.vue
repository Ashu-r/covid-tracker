<template>
	<div>
		<FilterTable :options="stateNames" @filter="filterTableData" />
		<b-table
			id="covid-data"
			striped
			bordered
			hover
			label-sort-asc=""
			label-sort-desc=""
			:sort-desc.sync="sortDesc"
			:items="items"
			:per-page="10"
			:current-page="currentPage"
			:fields="fields"
		></b-table>
		<Pagination :rows="rows"></Pagination>
	</div>
</template>

<script>
import FilterTable from './FilterTable.vue';
import Pagination from './Pagination.vue';
import { filterNumeric } from '../../utils';

export default {
	data() {
		return {
			stateData: this.$store.getters.mainData,
			sortDesc: true,
			fields: [
				{ key: 'state', sortable: false },
				{ key: 'confirmed', sortable: true },
				{ key: 'deceased', sortable: true },
				{ key: 'recovered', sortable: true },
				{ key: 'tested', sortable: true },
				{ key: 'vaccinated1', sortable: true },
				{ key: 'vaccinated2', sortable: true },
			],
			stateNames: this.$store.getters.stateNames,
			filterProperties: {},
		};
	},
	computed: {
		items() {
			return this.stateData;
		},
		currentPage() {
			return this.$store.getters.currentPage;
		},
		rows() {
			return this.stateData.length;
		},
	},
	methods: {
		filterTableData(obj) {
			let filteredData = this.$store.getters.mainData;
			if (obj.type === 'states') {
				if (obj.states.length < 1) {
					obj.states = this.stateNames;
				}
				filteredData = filteredData.filter((item) => obj.states.includes(item.state));
				this.filterProperties.states = obj.states;
				// eslint-disable-next-line no-prototype-builtins
				if (Object.prototype.hasOwnProperty.call(this.filterProperties, 'numeric')) {
					filteredData = filterNumeric(filteredData, this.filterProperties.numeric);
				}
			}
			if (obj.type === 'numeric') {
				filteredData = filterNumeric(filteredData, obj.numericParams);

				this.filterProperties.numeric = obj.numericParams;
				// eslint-disable-next-line no-prototype-builtins
				if (Object.prototype.hasOwnProperty.call(this.filterProperties, 'states')) {
					filteredData = filteredData.filter((item) => this.filterProperties.states.includes(item.state));
				}
			}
			this.stateData = filteredData;
		},
	},
	components: {
		FilterTable,
		Pagination,
	},
};
</script>
