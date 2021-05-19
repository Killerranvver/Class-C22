const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,ball;
var ledge;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,350,200,20,option);
  World.add(world,ground)
  var option2={
    restitution:1.0
  }
  ball=Bodies.circle(200,200,30,option2)
  World.add(world,ball)

  ledge=Bodies.rectangle(220,100,30,30)
  World.add(world,ledge)
}

function draw() {
  background(255,255,255);
   Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(ledge.position.x,ledge.position.y,400,200)
}