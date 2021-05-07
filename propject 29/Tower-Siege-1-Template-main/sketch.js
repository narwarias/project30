const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//level 1.1
can1 = new Block(700,175,30,40);
can2 = new Block(730,175,30,40);
can3 = new Block(760,175,30,40);
can4 = new Block(670,175,30,40);
can5 = new Block(720,175,30,40);
can6 = new Block(750,175,30,40);
can7 = new Block(650,175,30,40);


//level 1.2
can8 = new Block(684,135,30,40);
can9 = new Block(652,135,30,40);
can10 = new Block(775,135,30,40);
can11 = new Block(740,135,30,40);
can12 = new Block(710,135,30,40);

//level 1.3
can13 = new Block(675,95,30,40);
can14 = new Block(720,95,30,40);
can15 = new Block(685,95,30,40);


//top
can16 = new Block(710,55,30,40);


polygon=new Polygon(75,100,60,60);

launcherObject=new LauncherObject(polygon.body,{x:75,y:100});
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill("skyblue");
  can1.display();
can2.display();
can3.display();
can4.display();
can5.display();
can6.display();
can7.display();

fill("pink");
 can8.display();
can9.display();
can10.display();
can11.display();
can12.display();

fill("turquoise");
  can13.display();
   can14.display();
  can15.display();

  fill("grey");
can16.display();

polygon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

//create mouseReleased function here
function mouseReleased(){
  launcherObject.fly();
}