<template>
	<b-pagination aria-controls="covid-data" v-model="currentPage" :total-rows="rows" :per-page="perPage" @change="handlePageChange"></b-pagination>
</template>

<script>
export default {
	data() {
		return {
			currentPage: this.$store.getters.currentPage,
			perPage: 10,
		};
	},
	props: ['rows'],
	// computed: {
	// 	rows() {
	// 		return this.$store.getters.mainData ? this.$store.getters.mainData.length : 1;
	// 	},
	// },
	methods: {
		handlePageChange(value) {
			this.$store.commit('changePage', value);
			this.currentPage = value;
		},
	},
};
</script>
