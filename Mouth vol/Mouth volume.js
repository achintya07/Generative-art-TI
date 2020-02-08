let p;
let a;

var mic;

function setup() {
  createCanvas(400, 400); //canvas created
  let r;
  let k ;
  p=0;
  a=1;
  
  mic = new p5.AudioIn();
  mic.start();
  //variables defined
  frameRate(40); //frame rate kept 40 to have a better effect
}


function draw() {
  r = mouseX;
  k = mouseY;
  background(10, 10); //translucent background to leave a trail
  var vol = mic.getLevel();
  noStroke();
  fill('red');
  for (let t = 0; t < 360; t = t + 1) {
    // ellipse is in a loop where in which the X and Y coordinate changes as the mouse moves
    d = int(t);
    let x = width / 2 + r * sin(d) + 10
    let y = height / 2 + k * cos(d) + 10;
    ellipse(width - x + 2, height - y * 4, random(1, 3), random(1, 10));
    ellipse(x + 2, y * 4, random(1, 3), random(1, 10));
    //above two ellipses add an extra effect of entering a portal
    ellipse(x, y, random(10, 30), random(10, 100));
    console.log(vol);
  }
}