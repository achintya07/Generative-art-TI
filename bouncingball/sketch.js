let p = 0;
let q = 4;


function setup() {
  createCanvas(400, 400);
  frameRate(55);
  createLoop({duration:15,gif:true})
}

function draw() {
  background(212,122,123,12);
  let w = 55;
  let h = 80;
  fill(random());
  rect(p, height / 2 - h / 2, w, h);
  
  p = p + q;
  if (p > width-w) 
    {
      q = -q;
    }
    if (p < 0) {
      q = -q;
    }
    

  }