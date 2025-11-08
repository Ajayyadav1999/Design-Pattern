// The Prototype pattern is a creational design pattern used to create new objects by cloning existing ones — rather than creating them from scratch.
// In JavaScript, this pattern is built into the language itself, because JavaScript uses prototypal inheritance instead of classical inheritance

const carPrototype = {
  init(carModel, carColor) {
    this.carModel = carModel;
    this.carColor = carColor;
  },

  drive() {
    console.log(`Hey I am driving a ${this.carColor} ${this.carModel}`);
  },
};

const car1 = Object.create(carPrototype);
car1.init("Maruti 800", "White");
car1.drive();

const car2 = Object.create(carPrototype);
car2.init("Buggati Chiron", "Blue");
car2.drive();
