
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;
var leftEdge, rightEdge;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density :1.2



	}

	ball = Bodies.circle(250, 100, 25, ball_options);
	World.add(world,ball);

	ground = new Ground(800, 690, 1600, 20);
	leftEdge = new Ground(1200, 650, 10, 100);
	rightEdge = new Ground(1400, 650, 10, 100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS)
  fill("gold");
  ellipse(ball.position.x, ball.position.y, 25, 25);

  ground.display();
  leftEdge.display();
  rightEdge.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x : 75, y : -75});

	}
}

