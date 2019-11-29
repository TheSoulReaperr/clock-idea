let w;
function setup() {
  createCanvas(windowWidth, 200);
  w = windowWidth;
}

function draw() {
  background(0);
  let hours = hour();
  let mins = minute();
  let secs = second();
  hours = hours%12;
  milli = millis();
  milli = milli % 1000;
  
  noStroke();
  
  fill(150,200,255);
  let end = map(milli,0,1000,0,w);
  rect(0,150,end,50);
  
  fill(255,100,150);
  let end1 = map(secs,0,60,0,w);
  rect(0,100,end1,50);
  
  fill(150,255,100);
  let end2 = map(mins,0,60,0,w);
  rect(0,50,end2,50);
  
  fill(100,150,255);
  let end3 = map(hours,0,12,0,w);
  rect(0,0,end3,50);
  x=w/12;
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(20);
  stroke(255,50);
  for(let i=1;i<13;i++) {
    line(x,0,x,200);
    text(i,x,170);
    x += w/12;
  }
  line(w,0,w,200);
}

function windowResized() {
  resizeCanvas(windowWidth,200);
  w = windowWidth;
}
