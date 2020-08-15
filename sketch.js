const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2, box3, box4, box5, box6, strikr;
var platform, platform, ground;
var  slingshot, score, backgroundImg;

function preload(){
  getBackgroundIMG();
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    score =0;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    platform2 = new Ground(950, 335, 300, 120);
 strikr = new Striker(220, 50, 50, 50);
 box1 = new Box(950, 310, 50 ,50 );
 box2 = new Box(995, 310, 50 ,50 );
 box3 = new Box(915, 310, 50 ,50 );
 box4 = new Box(975, 140, 50 ,50);
 box5 = new Box(925, 140, 50 ,50);
 box6 = new Box(950, 100, 50 ,50);
 slingshot = new SlingShot(strikr.body,{x:200, y:50});

}

function draw(){
  if(backgroundImg){
    background(backgroundImg);
  }
    Engine.update(engine);
    strokeWeight(4);
ground.display();
strikr.display();
slingshot.display();
platform.display();
platform2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
textSize(35); 
fill(255);
strokeWeight(3);
text("Score  " + score, width-200, 50);
}

function mouseDragged(){
  Matter.Body.setPosition(strikr.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attatch(strikr.body);  
 
  }
}


async function getBackgroundIMG(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responsejson = await response.json();
  var time = responsejson.currentDateTime;
  var hour =  time.slice(11, 13);
 
  if(hour>=06 && hour<=18){
 bg = "bg.png";
  }else{
  bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);
 }