var bow , arrow,  background,redBalloon,blueBalloon,greenBalloon,pinkBalloon,score;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
  var balloon_group

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage=loadImage("pink_balloon0.png");
  blue_balloonImage-loadImage("blue_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
}
function redBalloon(){

  red =createSprite(0,Math.round(random(20,370)),10,10)
  red.addImage(red_balloonImage)
  red.scale=0.1
red.velocityX=3
red.lifetime=150
}
function blueBalloon(){

  blue=createSprite(0,Math.round(random(20,370)),10,10)
  blue.addImage(blue_balloonImage)
  blue.scale=1.5
  blue.velocityX=3
  blue.scale=0.1
blue.lifetime=150
}
 function pinkBalloon(){

 pink=createSprite(0,Math.round(random(20,370)),10,10)
  pink.addImage(red_balloonImage)
pink.scale=1.5
pink.lifetime=150
pink.velocityX=3
 }
 function greenBalloon(){
 greenBalloon =createSprite(0,Math.round(random(20,370)),10,10)
 greenBalloon.addImage(red_balloonImage)
  greenBalloon.scale=1.5
  green.lifetime=150
green.velocityX=3
 }



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  balloon_group= createGroup()
score=0
function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  var select_balloon=Math.round(rando,(1,4));
  if(World.frameCount % 100 == 0){
    if(select_balloon==1){
      redBalloon();
    }else if(select_balloon==2){
      greenBalloon()
    }else if(select_balloon==3){
      blueBalloon();
    }else {
      pinkBalloon
    }
  }
  if(gameState === PLAY){
    //move the ground
   scene.velocityX = -4;
    if(keyDown("space")&& arrow.y >= 100) {
      arrow.velocityY = -13;
    }
    
   arrow.velocityY = arroe.velocityY + 0.8

   if (scene.x < 0){
    scene.x = ground.width/2;
  }
  if(balloon_group.isTouching(arrow)){
    gameState=END
  }
}
  else if(gameState === END){
    //stop the ground
    scene.velocityX = 0;
 balloon_group.setVelocityXEach(0)

  }
 text("Score:"+score,270,30);
 redBalloon()
greenBalloon()
pinkBalloon()
blueBalloon()

spawn_balloons()
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}
}

 