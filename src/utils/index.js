export function filterNumeric(data, filterObject) {
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
	const comparisonOperator = comparisonOperatorsHash[filterObject.operation];
	return data.filter((item) => comparisonOperator(Number(item[filterObject.property]), Number(filterObject.value)));
}
