function setup() {
  createCanvas(500, 400);
  background('#222222');
}

function draw() {
  fill(mouseX, 0, 0);
 rect(0, 0, 200, 200);
 fill(mouseY, 90, 70)
 rect(210, 0, 290, 300);
 fill(mouseX, 70, 0)
 rect(0, 210, 200, 90);
 fill(mouseY, 170, 60)
 rect(100, 310, 100, 90);
 fill(mouseX, 100, 0)
 rect(210, 310, 200, 90);
 fill(mouseX, 60, 60)
 rect(420, 310, 80, 40);
 fill(mouseY, 110, 130)
 rect(420, 360, 80, 40)
}
