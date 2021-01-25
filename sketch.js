
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var iron;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 hammer= new Hammer(400,300,100,30); 
	 ground= new Ground(400,height,800,20);
	 stone= new Stone(300,650,50,50);
	 iron= new Iron(600,660,80,50);
	 rubber= new Rubber(680,660,60);
	 sand1= new Sand(200,670,20);
	 sand2= new Sand(220,670,20);
	 sand3= new Sand(240,670,20);
	 sand4= new Sand(260,670,20);
	 sand5= new Sand(350,670,20);
	 sand6= new Sand(140,670,20);
	 sand7= new Sand(380,670,20);
	 sand8= new Sand(400,670,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  hammer.display();
  ground.display();
  stone.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
}



