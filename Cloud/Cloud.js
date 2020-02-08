let x0, y0, z0, t, step;

function setup() {
  frameRate(1);
  colorMode(HSB);
  createCanvas(400, 400);
  x0 = 0;
  y0 = 0;
  t = 0.05;
  step = 5;
  noStroke();
  for (let j = 0; j < height; j += step) {
    for (let i = 0; i < width; i += step) {
      let n = noise(x0, y0, z0);
      let f = map(n, 0, 1, 0, 128);
      fill(f);
      ellipse(i, j, step * 2, step * 2);
      x0 += t;
    }
    y0 += t;
 
    x0 = 0;
  }
}

function draw() {
  // background(220);
}
