let img;
function preload()
{
img=loadImage('a.jpg');
  
}

function setup() {
  img.resize(0,400);
  createCanvas(img.width,img.height);
  frameRate(1000);
  // image(img,0,0);
}

function draw() {
  noStroke();
  // background(220);
  let x =random(0,width);
  let y=random(0,height);
  let col=img.get(x,y);
  fill(col);
  rect(x,y,10,10);
}