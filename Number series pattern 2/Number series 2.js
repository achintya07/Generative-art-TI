function setup() {
  createCanvas(400, 400);
  series(500)
  
}

function series(n) {
  
  // print(n);
  // fill(random(0,128),(0,128),(0,200),(0,100));
  
  fill(14,99,0,21);
  noStroke();
    ellipse(0,height/2,n,n);
  ellipse(width,height/2,n,n);
    ellipse(width-width/4,height/2,n,n);
  ellipse(width/4,height/2,n,n);
  
  ellipse(width/2,height/2,n,n);
  if(n>5){
    series(n*0.5);}

}