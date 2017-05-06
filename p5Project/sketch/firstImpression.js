// for centering the canvas
var cnv;
function centerCanvas(){
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  if(windowHeight <= windowWidth){
    cnv = createCanvas(windowHeight*0.8*1.618, windowHeight*0.8);
  }
  else if(windowHeight >= windowWidth){
    cnv = createCanvas(windowWidth*0.8, windowWidth*0.8*1.618);
  }
  centerCanvas();
  background(255, 0, 200, 50);
}

function draw() {
  if(mouseIsPressed){
    fill(200, 255, 0, 50);
  } else {
    fill(200, 0, 255, 50);
  }
  noStroke();
  ellipse(mouseX, mouseY, 80, 80);
}

// flexible to change the window size
function windowResized(){
  centerCanvas();
}
