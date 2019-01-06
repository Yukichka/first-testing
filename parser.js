function csvStringToJson(str) {
	const allRows = str.split("\n");

	if (allRows.length <= 1) return [];

	allRows.shift()


	return allRows.map(line => {
		const parts = line.split(',')
		let name = parts[0].trim(), age = parts[1].trim();

		if (name === '') name = 'unknown'
		
		if (age === '') age = 'unknown'
		else age = parseInt(age)

		return {
			name: name,
			age: age // NN or 'unknown'
		}
	})
} 

export default csvStringToJson;

