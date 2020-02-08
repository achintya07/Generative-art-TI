function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(400, 400, 400);
}

function drawCircle(X, Y, r) {
  ellipse(X, Y, r);
  if (r > 5) {

    drawCircle( r*0.5, Y+10, r*0.5);
    drawCircle( r*0.5, Y-10, r*0.5);
    drawCircle( width-r*0.5, Y+10, r*0.5);
    drawCircle( width-r*0.5, Y-10, r*0.5);
    
  }
}