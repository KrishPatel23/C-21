var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(400, 200, 50, 50);
 movingRect= createSprite(400, 800, 50, 50);

 fixedrect.shapeColor= "blue";
 movingRect.shapeColor= "blue";

 gameObject1=createSprite(200,200,100,100);
  gameObject2=createSprite(300,200,50,100);

// fixedrect.velocityY= 5;
 //movingrect.velocityY= -5;
}

function draw() {
  background(255,255,255);  

movingRect.x=mouseX;
movingRect.y=mouseY;

//bounceOff(fixedrect,movingrect);
if( isTouching(gameObject1,movingRect)){
  gameObject1.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
 }
 else{
  gameObject1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }


  drawSprites();
}








