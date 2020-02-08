function setup() {
  createCanvas(800, 800);
 series(0,1);
}

function series(a,b) {
  
  
  
    
  
    
  if(b<200){
    fill(random(0,225), (0,222,(0,212)));
    noStroke();
 
    triangle(a+b,a+b,a+b,9999,420,12);
    
     series(b,a+b)
  }
  
  
    
     
    
    
  }