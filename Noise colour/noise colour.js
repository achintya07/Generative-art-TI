function setup() {
  createCanvas(400, 400);
  
noStroke();
  for (let j = 0; j < height; j=j+30) {
    for (let i = 0; i < width; i=i+30) {
      let r=map(i,0,width,0,360);
      let q=map(j,0,height,0,200);
      fill(q,45,30,r);
    ellipse(i,j, q,r);
    
    }}
}

function draw() {
  // background(220);
}