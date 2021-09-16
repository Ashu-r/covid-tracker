<template>
	<b-table
		id="covid-data"
		striped
		bordered
		hover
		:sort-by.sync="sortBy"
		:sort-desc.sync="sortDesc"
		:items="items"
		:per-page="10"
		:current-page="currentPage"
		:fields="fields"
	></b-table>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			sortBy: 'State',
			sortDesc: false,
			// fields: [
			// 	{ key: 'State', sortable: true },
			// 	{ key: 'Confirmed', sortable: true },
			// 	{ key: 'Deceased', sortable: true },
			// 	{ key: 'Recovered', sortable: true },
			// 	{ key: 'Tested', sortable: true },
			// 	{ key: 'Vaccinated1', sortable: true },
			// 	{ key: 'Vaccinated2', sortable: true },
			// ],
		};
	},
	computed: {
		currentPage() {
			return this.$store.getters.currentPage;
		},
		items() {
			return this.$store.getters.totalCases;
		},
	},
	created() {
		console.log('created');
		axios.get('https://data.covid19india.org/v4/min/data.min.json').then(({ data }) => {
			console.log(data);
			this.$store.dispatch('initialize', data);
		});
	},
	methods: {
		update() {
			this.items = this.$store.getters.totalCases;
		},
	},
};
</script>
