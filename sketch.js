const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,leftwall,rightwall;
var bridge,link;
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  ground = new Base(width/2,height-10,width,10);
  leftwall = new Base(25,height/3,150,90);
  rightwall = new Base(width-25,height/3,150,90);
  bridge = new Bridge(40,{x:leftwall.body.position.x,y:leftwall.body.position.y})
  Matter.Composite.add(bridge.body,rightwall.body);
  link = new Link(bridge,rightwall);
  for (var i =0;i<8;i++){
    stone = new Stone(100*i+100,10*i,50);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  leftwall.show();
  rightwall.show();
  bridge.show();
  for(i=0;i<stones.length;i++){

    stones[i].show();
  }
}
