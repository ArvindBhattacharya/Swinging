const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, plr, string;
var obj1, high, swing, val;

engine: engine;

function preload(){
    swing = loadSound("BatSwing.mp3");
    field = loadImage("grass.jpeg");
}

function setup(){
  createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world
    ball = new Ball(600,200,30)
    plr = new Ball(600,500,30)
    obj1 = new Ball(600,110,20)
    plr.body.isStatic = true
    string = new Slingshot(ball.body,plr.body)
    high = 0
    
    textFont("Verdana");
    val = 30
}

function draw(){
    background(field);
    Engine.update(engine);
    ball.display();
    plr.display();
    obj1.display();
    Matter.Body.setPosition(plr.body,{x:mouseX,y:450});
    var1 = Math.round(obj1.body.speed)
    fill("BLACK")
    ellipse(600,100,50,25)
    textSize(30);
    fill("WHITE")
    text("ball's speed: " + Math.round(obj1.body.speed) + " pixels/frame", 700, 25);
    text("best speed: " + high + " pixels/frame",700,50);
    if (val > 30){
        text("swing speed: " + Math.round(val) + " pixels/frame",700,75)
        }
        
    textSize(24)
    fill("BLACK")
    textStyle(BOLD)
    text("Arm Length: " + string.sling.length,10,775)
    text("PRESS R TO GET BALL",800,775)
    text("PRESS Q TO DESCRASE ARM LENGTH",10,750)
    text("PRESS E TO INCREASE ARM LENGTH",10,725)
    textSize(50)
    fill("RED")
    strokeWeight(5)
    stroke("BLACK")
    textStyle(BOLDITALIC);
    text("Swinging Practice",10,50)    
    if (Math.round(obj1.body.speed) > high){
        high = Math.round(obj1.body.speed);
    }
    if((obj1.body.speed) > val){
     swing.play();
     val = (obj1.body.speed)
    }
    if(obj1.body.position.y > 1000){
        obj1.body.isStatic = true
    }
}

function keyPressed(){
    if(keyCode == 82){   
      obj1 = new Ball(600,110,20)
      val = 30
    }
    if(keyCode == 69 && string.sling.length < 180){
      string.sling.length =  string.sling.length + 5  
    }
    if(keyCode == 81 && string.sling.length > 60){
      string.sling.length =  string.sling.length - 5  
    }
}