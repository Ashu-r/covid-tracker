<template>
	<div>
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
export default {
	data() {
		return {
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
	methods: {
		update() {
			this.items = this.$store.getters.totalCases;
		},
	},
};
</script>
