function setup() {
  createCanvas(400, 400);
fill(100,128);
rectMode(CENTER);
  drawLine(width/2,height/2,width);}
  
  function drawLine(X,Y,side)
  { if(side>=3){
    
    X= int(random(1,400));
     
    strokeWeight(0.03);
  line(X, Y, side, side);
     
drawLine(X-side/3, Y-side/3, side/3);
drawLine(X+side/3, Y+side/3, side/3);
drawLine(X-side/3, Y+side/3, side/3);
drawLine(X+side/3, Y-side/3, side/3);
drawLine(X, Y-side/3, side/3);
drawLine(X+side/3, Y, side/3);
drawLine(X-side/3, Y, side/3);
drawLine(X, Y+side/3, side/3);
    
}}