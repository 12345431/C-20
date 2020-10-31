var fixed
var movin
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400,200,200,50)
  movin=createSprite(400, 200, 50, 50);
  movin.debug=true
  fixed.debug=true
  movin.shapeColor="red"
  fixed.shapeCOlor="black"
  
}

function draw() {
  background(255,255,255);
  movin.x=World.mouseX
  movin.y=World.mouseY 
  console.log(fixed.y-movin.y)
  if (fixed.x-movin.x<fixed.width/2+movin.width/2 &&
     movin.x-fixed.x<fixed.width/2+movin.width/2 &&
   fixed.y-movin.y<fixed.height/2+movin.height/2&&
   movin.y-fixed.y<fixed.height/2+movin.height/2){
    fixed.shapeColor="red"
    movin.shapeColor="black"
 }
 else {
  fixed.shapeColor="black"
  movin.shapeColor="red"
}


  drawSprites();
}