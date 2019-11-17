function createFs(n) { // tworzy tablicę n funkcji
	var fs = []; // i-ta funkcja z tablicy ma zwrócić i
	for (var i = 0; i < n; i++) {
		(function(i){
			// w tej funkcji mamy nowe, unikalne, niepowtarzalne, najpiękniejsze i
			fs[i] =
			function () {
				return i;
			};
		})(i);
	};
	return fs;
}
var myfs = createFs(10);
console.log(myfs[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs[2]()); // druga miała zwrócić 2
console.log(myfs[7]());