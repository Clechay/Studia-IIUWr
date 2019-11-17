function fibAfter(a,b){
	return {
		value: a,
		next: () => fibAfter(b,a+b)
	}
}

function fib() {
	let a=1, b=1;
	return {
		value: 1,
		next: function () {
			return {
				value: 1,
				next: () => fibAfter(1,1)
			}
		}
	}
}
function* fib() {
	let a=0, b=1;
	for(;;){
		yield b;
		let c = a + b;
		a = b;
		b = c;
	}
}