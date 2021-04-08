var hr;
var mi;
var sec;
var hAngle;
var mAngle;
var sAngle;




function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);


}


function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90)
  hr=hour();
  mi=minute();
  sec=second();

  hAngle=(hr%12,0,12,0,360);
  mAngle=(mi,0,60,0,360);
  sAngle=(sec,0,60,0,360);

  push(); 
  rotate(hAngle)
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop()
 
  push(); 
  rotate(mAngle)
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  push(); 
  rotate(sAngle)
  stroke("yellow");
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  stroke("red");
  point(0,0);

  strokeWeight(10);
  noFill();
  
  stroke("yellow");
  arc(0,0,300,300,0,sAngle);

  stroke("green");
  arc(0,0,280,280,0,mAngle);

  stroke("blue");
  arc(0,0,260,260,0,hAngle);
  
}