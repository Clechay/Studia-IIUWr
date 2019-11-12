const marki = [
	{ name:"Fiat", models:["126p","inny"] },
	{ name:"Tesla", models:["S", "X", "3", "ROADSTER 1", "ROADSTER 2"] }
]

function getMarka(name) {
	return marki.filter(m => m.name === name)[0];
}

const model = window.model;
const marka = window.marka;



function render() {
	const nazwaWybranejMarki =  getMarka(marka.value) ? marka.value : marki[0].name;
	marka.innerHTML = marki.map(m => `<option ${nazwaWybranejMarki===m.name ? "selected" : ""} value="${m.name}">${m.name}</option>`).join("");
	const wybranaMarka = getMarka(nazwaWybranejMarki);
	model.innerHTML = wybranaMarka.models.map(m => `<option ${m === model.value ? "selected" : ""} value="${m}">${m}</option>`).join("");
}
render();

const dodaj = window.dodaj;
dodaj.addEventListener('click', (e)=>{
	const txt = window.nowy.value;
	if(window.nowaMarka.checked){
		marki.push({name:txt, models:[]});
	}
	if(window.nowyModel.checked){
		const wybranaMarka = getMarka(marka.value);
		wybranaMarka.models.push(txt);
	}
	render();
})

marka.addEventListener("change",render)