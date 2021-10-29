var trex ,trex_running;
var ground , invisible_Ground 

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
 trex = createSprite(50, 160,20, 50);
 trex.addAnimation("running", trex_running);
 //crear sprite del suelo
 ground = createSprite(200, 180, 400, 20);
 ground.addImage("ground", groundImage);
 //Sprite del suelo invisible.
 invisible_Ground = createSprite(200, 190, 400, 10);
 invisible_Ground.visible=false;
 //Tamaño del Jugador.
 trex.scale=0.5;
 trex.x = 50;
 ground.velocityX = -4;
 ground.x = ground.width/2;

 //console.log(trex.y); 160
}

function draw(){
  background(220);
  console.log(trex.y);
  //Hacemos que el Jugador salte al presionar el espacio. 
  if(keyDown("space") && trex.y >= 145){
    trex.velocityY=-10;
   }

   //Agregamos gravedad.
   trex.velocityY=trex.velocityY+0.5;

   //Restablece el Juego.
   if(ground.x<0){
     ground.x=ground.width/2;
   }

   //Evitar que el Jugador caiga.
   trex.collide(invisible_Ground);
   
  drawSprites();  
  
}
