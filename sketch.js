const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,width,30,options);
  World.add(world,ground);
  console.log(ground.position.x);
  
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,100,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30)
}