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
  
  noFill();
  // background(220);
  let x =random(0,width);
  let y=random(0,height);
  let col=img.get(x,y);
  stroke(col);
  rect(x,y,40,40);
}
function keyPressed(){
  if(key=='s'){
saveCanvas("particle.jpg");}}