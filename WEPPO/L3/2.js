/**
 * Lista 1, Zadanie 5
 * Rozwiązanie opracował: Łukasz Kleczaj
 * 
 * Napisać iteracyjną i rekurencyjną wersję algorytmu 
 * wyznaczającegon-tą liczbę Fib-bonacciego. 
 * 
 * Napisać kod który zmierzy czasy wykonania obu wersji 
 * i wypisze na konsoli wpostaci tabeli dlanod 10 do ...? 
 * 
 * (no właśnie, do jakiej wielkościnobliczenie czasu 
 * jeszczema sens dla algorytmu rekurencyjnego?).
 * 
 * Pomiary powtórzyć w środowisku node.js, w przeglądarce 
 * Chrome oraz w jeszcze jednej,wybranej przez siebie 
 * dowolnej przeglądarce. 
 * 
 * Czy występują jakieś istotne różnice w po-miarach?
 * 
 * Uwaga. Do mierzenia czasu wykorzystać metodyconsole.time i console.timeEnd
 */

// FUNKCJE

/**
 * @param {number} n 
 * @returns {number}
 */
function rekursją(n){
	if(n === 0) return 0;
	if(n === 1) return 1;
	if(n === 2) return 1;
	return rekursją(n - 1) + rekursją(n - 2);
}

// TABELA

const cell_width = 15;
const repeat = (str,num) => {
	if(typeof num === "undefined") num = 1;
	return str.repeat(num)
}
function format_cell(content){
	if(typeof content !== "string") content = content.toString();
	if(cell_width < content.length) content = content.substring(0,cell_width);
	if(cell_width > content.length) content = repeat(" ",cell_width-content.length) + content;
	return content;
}
const rows_divider = repeat('+') + repeat( repeat('-',cell_width)+'+' , 3) + "\n";
function produce_row(...contents){
	return "|" + contents.map(format_cell).join("|") + "|\n";
}
function add_row(...contents){
	return produce_row(...contents) + rows_divider;
}
function add_heading(...contents){
	return rows_divider + produce_row(...contents) + rows_divider;
}

// POMIAR CZASU

let performance
if(typeof global !== "undefined"){
	performance = require('perf_hooks').performance;
}
const getTime = performance ? ()=>performance.now() : ()=>Date.now();
function measure( fun ){
	const start = getTime();
	fun();
	const end = getTime();
	return end - start;
}

// WYPISANIE WYNIKU

function memoize(fn) {
	var cache = {};
	return function (n) {
		if (String(n) in cache) {
			// console.log('from cache ',n)
			return cache[n]
		} else {
			var result = fn(n);
			cache[n] = result;
			// console.log('addded to cache ',n)
			return result;
		}
	}
} 


function rekursjąCached(n){
	if(n === 0) return 0;
	if(n === 1) return 1;
	if(n === 2) return 1;
	return memrec(n - 1) + memrec(n - 2);
}

const memrec = memoize(rekursjąCached)
memrec(39);

let respose = "";
respose+= add_heading("n", "momoizacja", "org");
for (let i = 0; i < 39; i++) { // 41 for node and 39 for chrome
	respose+= add_row(i, measure(()=>memrec(i)), measure(()=>rekursją(i)));
}
console.log(respose)