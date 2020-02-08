let btClick;
let slSize;
let colSize;

function setup() {
  createCanvas(400, 400);
  btClick = createButton("CLICK");
  slSize = createSlider(5, 45);
  colSize = createSlider(0, 400);
  // colorMode(HSB);
}


function draw() {
  background(220, 10);
  let tx = slSize.value();
  let col = colSize.value();
  btClick.mouseClicked(clickFn);
  textSize(tx);
  fill(col, 25, 255, 127);
  rect(40, 40, 40, 40);




}

function clickFn() {
  text("GOT CLICKED ", random(0, width), height / 2);

}