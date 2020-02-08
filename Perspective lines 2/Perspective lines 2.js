function setup() {
  createCanvas(400, 400);
fill(100,128);
rectMode(CENTER);
  drawSq(width/2,height/2,width);}
  
  function drawSq(X,Y,side)
  { if(side>=3){
    fill(random(0,128));
    strokeWeight(0.1);
  line(X, Y, side, side);  
drawSq(X-side/3, Y-side/3, side/3);
drawSq(X+side/3, Y+side/3, side/3);
drawSq(X-side/3, Y+side/3, side/3);
drawSq(X+side/3, Y-side/3, side/3);
drawSq(X, Y-side/3, side/3);
drawSq(X+side/3, Y, side/3);
drawSq(X-side/3, Y, side/3);
drawSq(X, Y+side/3, side/3);
    
}}