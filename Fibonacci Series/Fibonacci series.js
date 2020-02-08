function setup() {
  createCanvas(800, 800);
 series(0,1);
}

function series(a,b) {
  
  
  
    
  
    print(b);
  if(b<200){
    fill(random(0,225), (0,222,(0,212)));
    noStroke();
 //ellipse(b*a,b,b*b,b*a);
    triangle(b,b+a,b,b*a,b,a+b);
    
     series(b,a+b)
  }
  
  
    
     
    
    
  }