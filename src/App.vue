<template>
	<b-container>
		<h1>Covid tracker</h1>
		<Table></Table>
		<Pagination></Pagination>
	</b-container>
</template>

<script>
// import axios from 'axios';
import Table from './components/UI/Table.vue';
import Pagination from './components/UI/Pagination.vue';
export default {
	name: 'App',
	components: {
		Table,
		Pagination,
	},
};
</script>

<style></style>
