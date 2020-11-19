const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var box1,box2,ground;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,350,50,50);
    box2=new Box(220,100,50,100);
    ground=new Ground(200,390,400,20);
    

}

function draw() {
    background("black");
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
}