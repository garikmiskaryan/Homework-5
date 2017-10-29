const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};
const colores= ['yellow','black','green','orange','blue','red','Crimson','NavyBlue','aqua','Violet','Chartreus','Rose'];

  
  const createPoint = function(num, canvasWidth, canvasHeight){
	  const array = [];
	  const recursion = function(n){
		if(n<=0){
			return "";
		}  
		array.push({
			x: rand(canvasWidth - 50),
			y: rand(canvasHeight - 50),
			width: 50,
			height: 50,
			xDelta: 5,
			yDelta: 5,
			color: colores[rand(12)-1]
		})
		recursion(n-1);
	  }
	  recursion(num);
	  return array;
  };
  const dots = createPoint(40, canvas.width,canvas.height);
  const draw = function(){  
context.clearRect(0,0,canvas.width,canvas.height);
	  const drawEverything = function(arr,i){
		  if(i === arr.length){
			  return "";
		  }
		  context.fillStyle = arr[i].color;
		context.fillRect(arr[i].x,arr[i].y, arr[i].width,arr[i].height);
		  drawEverything(arr,i+1);
	  };
	  drawEverything(dots,0);
  };
 
  
  const updateData = function(){
	  const foreverything = function(arr, i){
		  if(i === arr.length){
			  return "";
		  }
		  if(arr[i].x >= canvas.width-arr[i].width){
			arr[i].xDelta = -arr[i].xDelta;
			arr[i].color = colores[rand(12)-1];
		}else if(arr[i].x<=0){
			arr[i].xDelta = -arr[i].xDelta;
			arr[i].color = colores[rand(12)-1];
		}
		if(arr[i].y >= canvas.height-arr[i].height){
			arr[i].yDelta = -arr[i].yDelta;
			arr[i].color = colores[rand(12)-1];
		}else if(arr[i].y<=0){
			arr[i].yDelta = -arr[i].yDelta;
			arr[i].color = colores[rand(12)-1];
		}
		arr[i].x =	 arr[i].x + arr[i].xDelta;
		arr[i].y = arr[i].y + arr[i].yDelta;
		foreverything(arr,i+1);
	  };
	  foreverything(dots,0);
  };
const loop = function(){
    
    draw();
    updateData();
    window.requestAnimationFrame(loop);
  };
  
  loop();

