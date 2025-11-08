// The Singleton pattern makes sure that only one object of a class is created, and everyone in your program can use that same object whenever they need it.

// ============== Reason why to use Singletone Pattern instead of traditional way ============= //

class ToyBox {
  constructor() {
    this.toys = [];
  }

  addToys(toy) {
    this.toys.push(toy);
  }

  showToys() {
    console.log(` Traditional ToyBox with: ${this.toys.join(", ")}`);
  }
}

const myToyBox1 = new ToyBox();
const myToyBox2 = new ToyBox();

myToyBox1.addToys("Car");
myToyBox2.addToys("Doll");

myToyBox1.showToys();
myToyBox2.showToys();

// Problem:
// You can create multiple instances of ToyBox.
// Each instance has its own separate list of toys.
// There's no single source of truth for the toys you own.

// =================== Using Singleton Pattern to solve above problems =================== //

class SingletonToyBox {
  constructor() {
    this.toys = [];
  }

  static getInstance() {
    if (!SingletonToyBox.instance) {
      SingletonToyBox.instance = new SingletonToyBox();
    }
    return SingletonToyBox.instance;
  }

  addToys(toy) {
    this.toys.push(toy);
  }

  showToys() {
    console.log(`Singleton ToyBox with: ${this.toys.join(", ")}`);
  }
}

// Testing SingletonToyBox

const singletonToyBox1 = SingletonToyBox.getInstance();
const singletonToyBox2 = SingletonToyBox.getInstance();

singletonToyBox1.addToys("Action Figure");
singletonToyBox2.addToys("Puzzle");

singletonToyBox1.showToys();

// Now both singletonToyBox1 and singletonToyBox2 refer to the same instance.
// The toys added via either reference are stored in the same toys array.
// There's a single source of truth for the toys you own.
