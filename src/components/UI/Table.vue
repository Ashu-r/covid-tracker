<template>
	<div>
		<FilterTable :options="options" @stateChanged="stateChanged" @numericChange="numericChange" />
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
		stateChanged(value) {
			if (value.length > 0) {
				console.log(value);
				this.stateData = this.$store.getters.filterStates(value);
				return;
			}
			this.stateData = this.$store.getters.mainData;
		},
		numericChange(filterObject) {
			if (Object.values(filterObject).some((o) => o === null)) {
				this.stateData = this.$store.getters.mainData;
				return;
			}
			this.stateData = this.$store.getters.filterProperties(filterObject);
		},
	},
	components: {
		FilterTable,
	},
};
</script>
