var bg,bgImg;
function preload(){
  bg =loadImage("images/iss.png")
  sleep= loadAnimation("images/sleep.png");
  brush =loadAnimation("images/brush.png");
  gym =loadAnimation("images/gym11.png","images/gym12.png");
  eat =loadAnimation("images/eat1.png","images/eat2.png");
  drink =  loadAnimation("images/drink1.png","images/drink2.png");
  bath = loadAnimation("images/bath1.png")
  move =loadAnimation("images/move.png")
}
function setup() {
  createCanvas(400,400)
  bgImg=createSprite(400,400);
  bgImg.addAnimation("ground",bg);
  astronaut = createSprite(320,220);
  astronaut.addAnimation("sleep",sleep);
  astronaut.scale=0.1 ;
  
}

function draw() {
  background(220);
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y= 350;
    astronaut.velocityX=0;
     astronaut.velocityY=0;
  }
    if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y= 350;
    astronaut.velocityX=0;
     astronaut.velocityY=0;
  }
    if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y= 350;
    astronaut.velocityX=0;
     astronaut.velocityY=0;
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y= 300;
    astronaut.velocityX=0;
     astronaut.velocityY=0;
  }
  if (keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y= 350;
    astronaut.velocityX=0;
     astronaut.velocityY=0;
  }
  drawSprites();
  fill("black")
  textSize(18)
  text("INSTRUCTION:",20,250)
 text ("UPARROW = brushing",20,270)
  text("DOWNARROW = gymming",20,290)
  text("LEFTARROW = eating",20,310)
  text("RIGHTARROW = bathing",20,330)
  text("m KEY = moving",20,350)
  
}