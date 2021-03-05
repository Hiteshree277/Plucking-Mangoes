
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boy;

function preload()
{
	this.image = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,650,800,15);
	boy=new Boy(350,645,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(123);
  Engine.update(engine);

  ground.display();
  boy.display();
  
  drawSprites();
 
}



