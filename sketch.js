
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImage;
function preload(){
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 500);
  boy = createSprite(150,420)
  boy.addImage(boyImage)
  boy.scale = 0.1
	engine = Engine.create();
	world = engine.world;
   tree = new Tree(200,200,50,40)
   ground = new Ground(500,500,1400,50)
   mango1 = new Mango(800,190,50,50)
   mango2 = new Mango(860,130,10,10)
   mango3 = new Mango(910,180,10,10)
   mango4 = new Mango(950,100,10,10)
   mango5 = new Mango(1070,180,10,10)
   mango6 = new Mango(1000,200,10,10)
   mango7 = new Mango(1000,130,10,10)
   mango8 = new Mango(850,230,10,10)
   mango9 = new Mango(900,80,10,10)
   stone = new Stone(200,200,10,10)
   sling = new SlingShot(stone.body,{x:200, y:360});
   Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background("lightblue");
  drawSprites();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  sling.display();
  stone.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x:200, y:360}) ;
    sling.attach(stone.body);
  }
}
  function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r){
   Matter.Body.setStatic(lmango.body,false);
 } 
}





