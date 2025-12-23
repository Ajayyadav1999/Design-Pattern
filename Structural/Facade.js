// Facade pattern: Facade pattern provides a simplified interface to a complex subsystem.

// Example you have the box of toys (Car, Doll, Robot etc) and each toy has its own complex functionality but

// you want to know that what each toy does without going into the details of each toy

// Then there should be the Magic button which when pressed will show you what each toy does and this is the facade pattern

// the magic button is the facade which simplifies the interaction with the complex toys subsystem

// Toy 1
class Doll {
  sayHi() {
    return "Doll is saying Hi";
  }
}

// Toy 2
class Car {
  drive() {
    return "Car is driving";
  }
}

// Toy 3
class Robot {
  walk() {
    return "Robot is walking";
  }
}

// Toys Box
class ToyBox {
  constructor() {
    this.doll = new Doll();
    this.car = new Car();
    this.robot = new Robot();
  }

  playWithToys() {
    return {
      doll: this.doll.sayHi(),
      car: this.car.drive(),
      robot: this.robot.walk(),
    };
  }
}

const playWithToysFacade = new ToyBox();
console.log(playWithToysFacade.playWithToys());
