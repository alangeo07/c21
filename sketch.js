var fixedRect,movingRect
var object1,object2;
var o1,o2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green"
  fixedRect.debug = true
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green"
  movingRect.debug = true

  01= createSprite(100, 100, 50, 80);
  o1.shapeColor = "green"
  o1.debug = true

  02= createSprite(200, 100, 50, 80);
  o2.shapeColor = "green"
  o2.debug = true
}

function draw() {
  background(255,255,255);  
  movingRect.X = World.mouseX;
  movingRect.Y = World.mouseY;
  if(isTouching(movingRect,o2)){
     movingRect.shapeColor  = "blue"
     o2.shapeColor  = "blue"
  }
  else {
    movingRect.shapeColor  = "green"
    o2.shapeColor  = "green"
  }

  drawSprites();
}
