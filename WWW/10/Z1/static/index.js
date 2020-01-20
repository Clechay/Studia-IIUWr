/** @type {HTMLInputElement} */
const login = document.querySelector(`#login`);
/** @type {HTMLInputElement} */
const password = document.querySelector(`#password`);
/** @type {HTMLInputElement} */
const passwordRep = document.querySelector(`#passwordRep`);
/** @type {HTMLInputElement} */
const birthdate = document.querySelector(`#birthdate`);

function getData() {
	return {
		login: login.value,
		password: password.value,
		passwordRep: passwordRep.value,
		birthdate: birthdate.value
	}
}

function makeAnAttempt() {
	$.post('/api',getData(),applyResponse)
}

function applyResponse(response) {
	login.classList[["add","remove"][Number(response.login)]]("wrong");
	password.classList[["add","remove"][Number(response.password)]]("wrong");
	passwordRep.classList[["add","remove"][Number(response.passwordRep)]]("wrong");
	birthdate.classList[["add","remove"][Number(response.birthdate)]]("wrong");
	console.log(response)
}