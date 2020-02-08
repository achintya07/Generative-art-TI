function setup() {
  createCanvas(400, 400);
  noStroke();
  // fill(0);
  fill(12,182,21,10);
  for (let i = 0; i < width; i += 5) {
    let n = map(i, 0, width, 12, 3);
    polygon(i, height / 2, i / 5, n);
  }

}

function draw() {
  // background(220);

}

function mouseClicked() {

  polygon(mouseX, mouseY, 50, 5);

}

function polygon(x, y, radius, npoints) {

  let angle = TWO_PI / npoints;
  
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {




    let sy = y + cos(a) * radius;
    let sx = x + sin(a) * radius;
    vertex(sx, sy);
    ellipse(sx, sy, 12, 18);
    
 }
  endShape();
}