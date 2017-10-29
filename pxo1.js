const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};
const colores= ['yellow','black','green','orange','blue','red','Crimson','NavyBlue','aqua','Violet','Chartreus','Rose'];

const createpoints =function(num,canvasWidth,canvasHeight){
	const array = [];
	const recursion = function(n){
		if(n<=0){
			return "";
		}
		array.push({
			x: rand(canvasWidth - 30),
			y: rand(canvasHeight -30),
			width: 30,
			height: 30,
			xDelta: 5,
			yDelta: 5,
			color: colores[rand(12)-1]
		})
		rec(n-1)
	}
	rec(num);
	return array;
};
console.log(createPoints(2,canvas.width,canvas.height));