let rx,ry,t0,t;
function setup() {
  createCanvas(400, 400);
  // rx=width/2;
  rx=0;
  ry=height/2;
  step=2;
  t0=0.01;  
  t=5;
  // fill(10);
}

function draw() {
  // background(220,10);
  
  // let x=random(-step,step);
  let y=random(0,step*10);
  // rx+=x;
  rx+=5;
  // ry+=y;
  // ellipse(rx,ry,5,5);
  let n= noise(t0);
  line(rx,height/2,rx,height/2+n*100);
  t0=t0+t;
}