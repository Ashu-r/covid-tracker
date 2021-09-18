<template>
	<b-container>
		<h1>Covid tracker</h1>
		<template v-if="hasLoaded"> <Table></Table> <Pagination></Pagination> </template>
		<template v-else> <Loading></Loading></template>
	</b-container>
</template>

<script>
import axios from 'axios';
import Table from './components/UI/Table.vue';
import Pagination from './components/UI/Pagination.vue';
import Loading from './components/UI/Loading.vue';
export default {
	name: 'App',
	data() {
		return {
			hasLoaded: false,
		};
	},
	created() {
		axios.get('https://data.covid19india.org/v4/min/data.min.json').then(({ data }) => {
			this.$store.dispatch('initialize', data);
			this.hasLoaded = true;
		});
	},
	components: {
		Table,
		Pagination,
		Loading,
	},
};
</script>

<style></style>
