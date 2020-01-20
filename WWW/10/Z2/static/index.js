/**
 * @type {HTMLInputElement}
 */
const input = document.querySelector(`#queryInput`);
/**
 * @type {HTMLOListElement}
 */
const suggestions = document.querySelector(`#suggestions`);
let lastQuery = 'initial value'
function updateSuggestions() {
	if(input.value.trim() === lastQuery) return;
	$.ajax( {
		url:`/api?q=${input.value}`,
		success:function(data) {
			console.log("onsuccess",data,suggestions)
			suggestions.innerHTML = data
				.map(title => `<li>${title}</li>`)
				.join(``);
			document.querySelectorAll("#suggestions>li").forEach(li => li.addEventListener('click',selectSuggestion))
		}
	});
}

function selectSuggestion(event) {
	const name = event.target.innerText.trim();
	input.value = name;
	updateSuggestions();
}

input.addEventListener('change', updateSuggestions);
input.addEventListener('keyup', updateSuggestions);

updateSuggestions();