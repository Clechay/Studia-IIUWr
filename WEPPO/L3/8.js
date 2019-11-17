function* fib() {
	let a=0, b=1;
	for(;;){
		yield b;
		let c = a + b;
		a = b;
		b = c;
	}
}

function* take(it, top) {
	const arr = [];
	for (let i = 0; i < top; i++) {
		yield it.next().value;
	}
	return;
}
// zwróć dokładnie 10 wartości z potencjalnie
// "nieskończonego" iteratora/generatora
for (let num of take(fib(), 4)) {
	console.log(num);
}