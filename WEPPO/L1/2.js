/**
 * Lista 1, Zadanie 2
 * Rozwiązanie opracował: Łukasz Kleczaj
 * 
 * Napisać program, który wyznacza zbiór wszystkich liczb natualnych 1 a 100000, 
 * które są podzielne zarówno przez każdą ze swoich cyfr z osobna jak i przez sumę 
 * swoich cyfr.
 */


/**
 * 
 * @param {number} number 
 * @returns {number[]} digits
 */
function digits(number){
	return number.toString()
		.split("")
		.map(char => Number(char));
}
function check(number){
	const sum = digits(number).reduce( (acc,val)=>acc+val, 0 );
	if(number%sum) return false;
	return digits(number).reduce( (acc,val)=>acc&&(!(number%val)), true );
}
const results = [];
for (let i = 1; i <= 100000; i++) {
	if(check(i)) results.push(i);
}
console.log(results);