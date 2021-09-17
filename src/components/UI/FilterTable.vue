<template>
	<div class="filter">
		<h6>Filter by States:</h6>
		<v-select v-model="states" class="state-select" multiple :options="options" @input="stateChanged">Select this</v-select>
		<div class="numeric">
			<h6 class="numeric-select">Filter by</h6>
			<h6 class="operation">= , > , &lt;</h6>
			<h6>Value</h6>
		</div>
		<div class="numeric">
			<v-select v-model="property" @input="numericFilterChanged($event, 'property')" class="numeric-select" :options="fieldOptions"></v-select>
			<v-select v-model="operation" @input="numericFilterChanged($event, 'operation')" class="operation" :options="['=', '>', '<']"></v-select>
			<input v-model="value" @input="numericFilterChanged($event.target.value, 'value')" type="number" />
			<b-button @click="clearNumeric" variant="outline-info">Clear</b-button>
			<b-button @click="clearAll" variant="outline-primary">Clear All</b-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			states: [],
			property: null,
			operation: null,
			value: null,
			fieldOptions: ['confirmed', 'deceased', 'recovered', 'tested', 'vaccinated1', 'vaccinated2'],
		};
	},
	props: {
		options: Array,
	},
	computed: {},
	methods: {
		stateChanged(value) {
			this.$emit('stateChanged', value);
		},
		numericFilterChanged(value, name) {
			this[name] = value;
			this.emitNumericChange();
		},
		clearNumeric() {
			this.property = null;
			this.operation = null;
			this.value = null;
			this.emitNumericChange();
		},
		clearAll() {
			this.clearNumeric();
			this.$emit('stateChanged', []);
			this.$emit('clearAll');
		},
		emitNumericChange() {
			const changedObject = { property: this.property, operation: this.operation, value: this.value };
			this.$emit('numericChange', changedObject);
		},
	},
};
</script>

<style scoped>
.filter {
	margin-bottom: 2rem;
}
.state-select {
	margin-bottom: 1rem;
}
.numeric {
	display: flex;
	flex-direction: row;
}
.numeric > * {
	margin-right: 1rem;
}
.numeric-select {
	width: 30%;
}
.operation {
	width: 10%;
}
</style>
