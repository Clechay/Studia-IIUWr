/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector("#can");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const point = {
	x: 1,
	y: 2
}

/**
 * @param {Array} arr
 */
function randomMember(arr) {
	return arr[ Math.floor(Math.random()*(arr.length)) ]
}

function halfWay(a,b) {
	return {
		x: (a.x+b.x)/2,
		y: (a.y+b.y)/2,
	}
}

const points = [];
let gamePoint = null;


ctx.fillStyle = 'hsla(0.666, 100%, 50%, 0.2)';

function chaos() {
	let newPoint;

	for (let i = 0; i < 50; i++) {
		newPoint = halfWay( randomMember(points), gamePoint );
		ctx.beginPath();
		ctx.arc(newPoint.x, newPoint.y, 0.4, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fill();
			
	}

	gamePoint = newPoint;
	window.requestAnimationFrame(chaos);
}


canvas.addEventListener('click',function (e) {
	const point = {
		x:e.offsetX,
		y:e.offsetY,
	}
	if(points.length < 3) points.push(point);
	else if(!gamePoint){
		gamePoint = point;
		chaos()
	}
})