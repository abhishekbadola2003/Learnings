function car(brand, name, model) {
  (this.carbrand = brand), (this.carname = name), (this.carmodel = model),
  this.printname = function() {
     return `you are driving: ${brand} ${name}`;
  };
  this.toString = function() {
    return JSON.stringify(this);
  };
}
const car1 = new car("toyota", "supra", 2015);
const car2 = new car("ferrari", "chiron", 2018);
const car3 = new car("toyota", "hilux", 2024);


console.log(car1);
console.log(`you can drive ${car1.carbrand}`);
console.log(car1.printname());

 