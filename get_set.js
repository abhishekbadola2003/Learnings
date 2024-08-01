class rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  set breadth(newbreadth) {
    if (newbreadth > 0) {
      this._breadth = newbreadth;
    } else {
      console.log("Breadth must be a postive number");
    }
  }

  set length(newlength) {
    if (newlength > 0) {
      this._length = newlength;
    } else {
      console.log("Breadth must be a postive number");
    }
  }

  get length() {
    return this._length;
  }

  get breadth() {
    return this._breadth;
  }

  get area() {
    return (this._breadth * this._length);
  }
}

const rectangle1 = new rectangle(12, 100);
console.log(rectangle1.length + "  length");
console.log(rectangle1.breadth + "  breadth");
console.log(rectangle1.area + "  area");
