var rect , rect2
function setup() {
  createCanvas(800,400);
  rect = createSprite (200,200,20,20);
  rect2 = createSprite (200,400,20,20);
}

function draw() {
  background(255,255,255);  
  rect.shapeColor = "red";
  rect2.shapeColor = "blue";
rect2.y = mouseY;
rect2.x = mouseX;
isTouching ();
  drawSprites();
}
function isTouching (){
  if (rect.x - rect2.x < rect.width/2 + rect2.width/2 && rect2.x - rect.x < rect.width/2 + rect2.width/2 && rect.y - rect2.y < rect.height/2 + rect2.height/2 && rect2.y - rect.y < rect.height/2 + rect2.height/2 ){
    rect.shapeColor = "green";
  rect2.shapeColor = "orange";
  
  
  }
}