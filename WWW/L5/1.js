const inputs = Array.from(document.querySelectorAll("[data-validate]"));
const form = document.querySelector("form");
/**
 * 
 * @param {string} nr 
 */
function checkIBAN(nr){
	return nr.match(/PL\d{2}(\s\d{4}){6}/);
}
function checkEmail(email){
	return email.match(/([a-zA-Z]+@[a-z]+\.[a-z]+)/)
}
function checkPESEL(pesel){
	if(!pesel.match(/\d{11}/)) return false;
	const d = pesel.split("").map(d => Number(d));
	const sum = 9*d[0] + 7*d[1] + 3*d[2] + 1*d[3] + 9*d[4] + 7*d[5] + 3*d[6] + 1*d[7] + 9*d[8] + 7*d[9];
	const expectedLastDigit = sum%10;
	return expectedLastDigit === d[10];
}
/**
 * 
 * @param {HTMLInputElement} input 
 */
function isValid(input){
	const type = input.dataset["validate"];
	if(type === "pesel") return checkPESEL(input.value);
	if(type === "email") return checkEmail(input.value);
	if(type === "iban") return checkIBAN(input.value);
}

function validateInput(input){
	if(!isValid(input)){
		input.classList.add("wrong");
		return false;
	}
	return true;
}

inputs.forEach(input => {
	input.addEventListener("focus", e => input.classList.remove("wrong"));
	input.addEventListener("blur", e => validateInput(input) );
})

form.addEventListener('submit', (e) => {
	let acc = true;
	inputs.forEach(input => {
		acc = validateInput(input) && acc;
	});
	if(!acc) e.preventDefault();
});