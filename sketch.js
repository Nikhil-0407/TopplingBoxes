const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1, pig2;
var log1,log2, log3, log4;
var bird1;
function setup(){
    var canvas = createCanvas(600,300);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(370,290,30,30);
    box2 = new Box(460,290,30,30);
    box3 = new Box(370,240,30,30);
    box4 = new Box(460,240,30,30);
    box5 = new Box(415,220,30,30);
    ground = new Ground(500,height,1000,20);
    pig1 = new Pig(415,290);
    pig2 = new Pig(415,240);
    log1 = new Log(415,260,121 ,PI/2);
    log2 = new Log(415,230,121 ,PI/2);
    log3 = new Log(415,200,100 ,-PI/5); 
    log4 = new Log(415,200,100 ,PI/5);
    bird1 = new Bird(90,140);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}