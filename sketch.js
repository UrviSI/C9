var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
  changeColor()
  move()
  drawSprites()
}

function changeColor() {
  if (keyIsDown(RIGHT_ARROW)){
    box.shapeColor = 'red'
  }
  if (keyIsDown(LEFT_ARROW)){
    box.shapeColor = 'lightblue'
  }
  if (keyIsDown(UP_ARROW)){
    box.shapeColor = 'white'
  }
  if (keyIsDown(DOWN_ARROW)){
    box.shapeColor = 'yellow'
  }
}
function move() {
  if (keyIsDown(RIGHT_ARROW)){
    box.x += 5
  }
  if (keyIsDown(LEFT_ARROW)){
    box.x -= 5
  }
  if (keyIsDown(UP_ARROW)){
    box.y -= 5
  }
  if (keyIsDown(DOWN_ARROW)){
    box.y += 5
  }
}



