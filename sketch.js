var canvas;
let rings = [];
let animationOn = true;
let angle = 0;
let radius = 150; // Adjust the radius of the circular motion
let angularSpeed = 0.4; // Adjust the speed of the circular motion

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', 1);
}

function draw() {
  background(27);

  // Calculate the center of the circular motion
  let centerX = width / 2;
  let centerY = height / 2;

  // Update the angle for each frame with a faster speed
  angle += angularSpeed;

  // Calculate the new position based on the circular motion
  let x = centerX + cos(angle) * radius;
  let y = centerY + sin(angle) * radius;

  // Add a new ring to the array
  if (animationOn) {
    rings.push(new Ring(x, y));
  }

  // Display and update existing rings
  for (let i = 0; i < rings.length; i++) {
    rings[i].display();
    rings[i].grow();
    rings[i].fade();

    if (rings[i].alpha < 0) {
      rings.splice(i, 1);
    }
  }
}

class Ring {
  constructor(mx, my) {
    this.x = mx;
    this.y = my;
    this.diameter = 0;
    this.alpha = 255;
  }

  display() {
    // let col = map(this.diameter, 0, 50, 0, 100)
    noFill();
    strokeWeight(0.7);
    // stroke(255-col, col/2, 255-(col/4), this.alpha);
    stroke(255, this.alpha);
    circle(this.x, this.y, this.diameter);
  }

  grow() {
    this.diameter += random(1.5, 2);
  }

  fade() {
    this.alpha -= random(1, 2.5);
  }
}
