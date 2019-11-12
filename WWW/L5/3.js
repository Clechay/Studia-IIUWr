const loads = Array.from(document.querySelectorAll(".load"));

let i = 0;
setInterval( ()=>{
	loads[i].classList.toggle("engaged");
	loads[i].classList.toggle("disengaged");
	i = (i+1)%loads.length;
} , 1000 )