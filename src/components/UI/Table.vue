<template>
	<div>
		<b-table striped bordered hover :items="items"></b-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: this.$store.getters.totalCases,
		};
	},
};
</script>
