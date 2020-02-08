let thesePpl = [];

function setup() {
  createCanvas(400, 400);
  // person = new Student();
  // p2 = new Student();
  // p3 = new Student();
  for (let i = 0; i < 200; i++) 
  {
    thesePpl[i] = new Student(i);
  }
  for (let i = 0; i < thesePpl.length; i++) {
    // let r= int(random(0,thesePpl.length-1));
    thesePpl[i].display();
  }

  //   person.display();
  //   p2.display();
  //   p3.display();

}

function draw() {
  background(220);
  
}
class Student {
  constructor(a) {

    this.name = "alphaBeta";
    this.address = a;
    this.number = int(random(0, 100));


  }
  display() {
    print("name:", this.name);
    print("number:", this.number);
    print("address:", this.address);
  }
}