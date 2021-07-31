const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(1500,800);
  engine= Engine.create();
  world= engine.world;
 var options={
   isStatic:true
 }

monster=new Monster(1150,550,50,50);
 ground= Bodies.rectangle(1200,600,200,10,options);
 World.add(world,ground);

var bounce={
  restitution:1
}


}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
   
  rect(ground.position.x,ground.position.y,400,10);
monster.display();
  drawSprites();
}