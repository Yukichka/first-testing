function add(a, b) {
	return a + b;
}

function cap(str) {
	if (str.length === 0) return 'unknown';
	if (str.length == 1) return str;

	str = str.split('').map((ch, i) => i % 2 == 0 ? ch : ch.toUpperCase()).join('')

	return str;
}

export default cap;

