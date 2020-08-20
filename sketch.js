const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   
    ball = new Ball(200,50);

    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    
    box3.display();
    box4.display();

    ball.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}