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


function chaos() {
	const newPoint = halfWay( randomMember(points), gamePoint );

	ctx.globalAlpha = 0.2;
	ctx.beginPath();
	ctx.fillStyle = `hsl(0.666, 100%, 50%)`;
	ctx.arc(newPoint.x, newPoint.y, (Math.random()*5), 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fill();

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