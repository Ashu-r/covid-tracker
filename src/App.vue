<template>
	<b-container>
		<h1>Covid tracker</h1>
		<ct-table></ct-table>
	</b-container>
</template>

<script>
import axios from 'axios';
import Table from './components/UI/Table.vue';
export default {
	name: 'App',
	components: {
		ctTable: Table,
	},
	created() {
		axios.get('https://data.covid19india.org/v4/min/data.min.json').then(({ data }) => {
			console.log(data);
			this.$store.dispatch('initialize', data);
		});
	},
};
</script>

<style></style>
