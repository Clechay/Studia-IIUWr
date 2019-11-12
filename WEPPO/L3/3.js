function forEach(a, f) {
	for (const el of a) {
		f(el);
	}
}
function map(a, f) {
	const acc = [];
	for (const el of a) {
		acc.push(f(el));
	}
	return acc;
}
function filter(a, f) {
	const acc = [];
	for (const el of a) {
		if(f(el)) acc.push(el);
	}
	return acc;
}
var a = [1, 2, 3, 4];
forEach(a, el => { console.log(el); });
// [1,2,3,4]
filter(a, el => el < 3);
// [1,2]
map(a, el => el * 2);
	// [2,4,6,8]