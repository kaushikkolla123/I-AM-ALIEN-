var x=100;
var y=470;
var radius = 70;
var bodyHeight = 160;
var faceHeight = 70;
var easing = 0.5;

function setup(){
 createCanvas(600,600);
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw(){
  background("purple");
  var targetX=mouseX;
  x=x+(targetX-x)* easing;
  textFont("times New Roman");
  text("I am Alien !!",430,200);
  textSize(30);
  if(mouseIsPressed){
    faceHeight = 50;
    BodyHeight= 90;
  }
  else{
    faceHeight = 70;
    bodyHeight = 160;
  }
  var faceY=y-bodyHeight-faceHeight-radius;
  
  
  stroke(100);
  line(x+12,y-bodyHeight,x+12,faceY);
  
 line(x+12,y-40,x+100,500) ;
  fill("yellow");
  rect(x+100,500,faceY - 50,bodyHeight-100);
  
   line(x+12,y-40,x-100,500) ;
  
  rect(x-220,500,faceY - 50,bodyHeight-100);
  
  noStroke();
  fill("yellow");
  ellipse(x,y-30,33,33);
 
  fill("yellow");
  rect(x-45,y-bodyHeight,90,bodyHeight-33);
  
  fill("yellow");
  ellipse(x+12,faceY,radius,radius);
  fill("black");
  ellipse(x+16,faceY-12,14,14);

  ellipse(x+24,faceY-6,3,3);
  
}