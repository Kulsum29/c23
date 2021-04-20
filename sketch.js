const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object; //line1
var object2;
var object3;
var ground;
function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

   
    object = new Box(400,290,40,100); //line2 Box = Class
    object2 = new Box(415,455,60,50);
    object3 = new Box(400,300,50,50);
    
    ground = new Ground(300,500,600,20);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    object.display(); //line3
     object2.display();
    object3.display();
    ground.display();
 
}