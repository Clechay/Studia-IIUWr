/**
 * Lista 1, Zadanie 3
 * Rozwiązanie opracował: Łukasz Kleczaj
 * 
 * Napisać program, który wyznacza zbiór liczb pierwszych między 2 a 100000.
 * Zastoso-wać metodę najprostszą algorytmicznie, niekoniecznie wydajną 
 * obliczeniowo (za wydajnyalgorytm nie będzie dodatkowych punktów).
 */

/**
 * @param {number} number
 * @returns {boolean} 
 */
function check(number){
	for (let i = 2; i < number; i++) {
		if(! (number%i)) return false;
	}
	return true;
}
const results = [];
for (let i = 1; i <= 100000; i++) {
	if(check(i)) results.push(i);
}
console.log(results);