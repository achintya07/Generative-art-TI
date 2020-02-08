let img;
let swarm = [];
function preload()
{
img=loadImage('g.jpg');
  
}

function setup() {
  img.resize(0,400);
 for (let i = 0; i < 10; i++) {  //create 10 objects 
    swarm[i] = new Particle(); }
  createCanvas(img.width,img.height);
  frameRate(1000);
  // image(img,0,0);
}

function draw() {
  
  
  // background(220);
  let x =random(0,width);
  let y=random(0,height);
  let col=img.get(x,y);
  strokeWeight(2);
  stroke(col);
  noFill();
 for (let i = 0; i < swarm.length; i++) {
    swarm[i].update();          //update and display for
    swarm[i].display();         //every obj in array
  }

  
  
  
}
class Particle {
  constructor() {
   this.posX = random(0, width);      //location x,y
    this.posY = random(0, height);
    this.velX = random(1, 2);          //velocity in x,y
    this.velY = random();              //i.e "step-size"
    this.accX = 0.0;                   //acc'n in x,y     
    this.accY = 0.1;                   //i.e "attraction"
    this.rad = random(20,40); 
  }
  display() {
    ellipse(this.posX, this.posY, this.rad)
  }
  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posX > width) {
      this.velX = -this.velX
    }
    if (this.posY > height) {
      this.velY = -this.velY
    }
    if (this.posX < 0) {
      this.velX = -this.velX
    }
    if (this.posY < 0) {
      this.velY = -this.velY
    }
    this.velX+=this.accX
    this.velY+=this.accY
  }}
function mouseClicked() {
  let p = new Particle();   //create new particle
  p.posX = mouseX;          //position it at mouse loc
  p.posY = mouseY;
  swarm.push(p);            //add it into the array
}
