// Bridge Pattern:
// Bridge Pattern means keeping two things separate but connecting them with a bridge so they can work together.
// It does not reduce the no of object creation but reduces the no of class creations.

// Colors
class RedColor {
  applyColor() {
    console.log("Applying Red Color");
  }
}

class BlueColor {
  applyColor() {
    console.log("Applying Blue Color");
  }
}

// Bridge class
class Shape {
  constructor(color) {
    this.color = color;
  }
}

// Shapes
class Circle extends Shape {
  draw() {
    console.log("Drawing Circle");
    this.color.applyColor();
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing Square");
    this.color.applyColor();
  }
}

const newCircleRed = new Circle(new RedColor());
const newCircleBlue = new Circle(new BlueColor());
newCircleRed.draw();
newCircleBlue.draw();

const newSquareRed = new Square(new RedColor());
const newSquareBlue = new Square(new BlueColor());
newSquareRed.draw();
newSquareBlue.draw();
