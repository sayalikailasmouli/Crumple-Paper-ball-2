
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(400,710,1200,20);
	ball1= new ball(50,650,40);
	dustbin1 = new Dustbin(770,630,20,150);
	dustbin3 = new Dustbin(570,630,20,150);
	dustbin2= new Dustbin(665,600,260,230);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 235, 205);
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  ball1.display();
 
 
 
}

function keyPressed(){
     
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:-400});
	}


}




