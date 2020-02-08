let x0,step,t,t0;
function setup() {
  createCanvas(400, 400);
x0=0
  step=5
  t=0.05
  t0=5
noStroke();
  for (let j = 0; j < height; j=j+30) {
    for (let i = 0; i < width; i=i+30) {
      let n=noise(t0)
      let r=map(n,0,1,5,50);
      // let q=map(j,0,height,0,200);
      fill(r,45,30,r);
    ellipse(i,j, r,r);
      t0+=t
    
    }}
}

function draw() {
  // background(220);
}