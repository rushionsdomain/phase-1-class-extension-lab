// helpers.js (assuming you have necessary helper functions here)

// Polygon class implementation
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  // Getter for countSides
  get countSides() {
    return this.sides.length;
  }

  // Getter for perimeter
  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

// Triangle class extending Polygon
class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }

  // Getter for isValid
  get isValid() {
    if (this.countSides !== 3) return false;
    let [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}

// Square class extending Polygon
class Square extends Polygon {
  constructor(sides) {
    super(sides);
  }

  // Getter for isValid
  get isValid() {
    if (this.countSides !== 4) return false;
    let [a, b, c, d] = this.sides;
    return a === b && a === c && a === d;
  }

  // Getter for area
  get area() {
    return this.sides[0] ** 2;
  }
}

// Export the classes
module.exports = { Polygon, Triangle, Square };
