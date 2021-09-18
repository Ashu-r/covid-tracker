<template>
	<div>
		<FilterTable :options="options" @filter="filterTableData" />
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
	</div>
</template>

<script>
import FilterTable from './FilterTable.vue';

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
			options: this.$store.getters.stateNames,
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
	},
	methods: {
		filterTableData(obj) {
			let filteredData = this.$store.getters.mainData;
			if (obj.type === 'states') {
				filteredData = filteredData.filter((item) => obj.states.includes(item.state));
				this.filterProperties.states = obj.states;
				// eslint-disable-next-line no-prototype-builtins
				if (Object.prototype.hasOwnProperty.call(this.filterProperties, 'numeric')) {
					filteredData = this.filterNumeric(filteredData, this.filterProperties.numeric);
				}
			}
			if (obj.type === 'numeric') {
				filteredData = this.filterNumeric(filteredData, obj.numericParams);

				this.filterProperties.numeric = obj.numericParams;
				// eslint-disable-next-line no-prototype-builtins
				if (Object.prototype.hasOwnProperty.call(this.filterProperties, 'states')) {
					filteredData = filteredData.filter((item) => this.filterProperties.states.includes(item.state));
				}
			}
			this.stateData = filteredData;
		},
		filterNumeric(data, filterObject) {
			// Filteres numerical values specified according to object
			if (Object.values(filterObject).some((o) => o === null)) {
				return data;
			}
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
			return data.filter((item) => comparisonOperator(item[filterObject.property], filterObject.value));
		},
	},
	components: {
		FilterTable,
	},
};
</script>
