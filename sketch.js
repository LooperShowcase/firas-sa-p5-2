let bg;
let y = 0;

function setup() {
  bg = loadImage(
    "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/04/The-hobbit-the-battle-of-the-five-armies-lord-of-the-rings-the-fellowship-of-the-ring.jpg"
  );
  createCanvas(1200, 800);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(-90);

  background(bg);
  let sc = second();
  let mn = minute();
  let hr = hour();

  noFill();
  stroke("#282B28");
  strokeWeight(8);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 450, 450, 0, secondAngle);

  push();
  stroke("yellow");
  rotate(secondAngle);
  line(0, 0, 150, 0);
  pop();

  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 400, 400, 0, minuteAngle);

  push();
  stroke("yellow");
  rotate(minuteAngle);
  line(0, 0, 130, 0);
  pop();

  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  +map(sc, 0, 60, 0, 6);
  arc(0, 0, 350, 350, 0, hourAngle);
  push();
  stroke("yellow");
  rotate(hourAngle);
  line(0, 0, 110, 0);
  pop();

  pop();
  push();
  stroke("red");
  strokeWeight(13);
  point(0, 0);
  pop();

  stroke("blue");
  rotate(90);
  strokeWeight(1);
  text("12", -25, -250);
  textSize(30);

  push();
  rotate(-2.5);
  strokeWeight(1);
  text("3", 237, 0);
  textSize(30);
  stroke("green");
  pop();

  push();
  rotate(-2.5);
  stroke("purple");
  strokeWeight(1);
  text("9", -237, 0);
  textSize(30);
  pop();

  push();

  strokeWeight(1);
  stroke("yellow");
  text("6", -25, 250);
  textSize(30);
  pop();
}
