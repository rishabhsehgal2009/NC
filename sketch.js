
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rooff;
var diameter;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	//ma i am not able to make the ropes plz help me.
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    rooff = new Roof(400,100,600,15);
	diameter = 50;
	
	bobObject1 = new Bob(450,200,50);
	rope1 = new Rope(bobObject1.body,rooff.body,-diameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rooff.display();
  bobObject1.display();
  rope1.display();
  drawSprites();
 
}



