// Composite Pattern: composite pattern is used when we need to treat a group of object and the individual object in the same way.

// Playable composite class
class Playable {
  play() {}
}

// Leaf classes
class Toy extends Playable {
  play() {
    console.log("Playing with the toy");
  }
}

// composite class
class ToyBox extends Playable {
  constructor() {
    super();
    this.itemsInBox = [];
  }

  addItem(item) {
    this.itemsInBox.push(item);
  }

  play() {
    console.log("Opening the toy box");
    this.itemsInBox.forEach((item) => {
      item.play();
    });
  }
}

const toy1 = new Toy();
const toy2 = new Toy();

const toyBox = new ToyBox();

toyBox.addItem(toy1);
toyBox.addItem(toy2);

toyBox.play(); // Multiple toys in the box

const singletoy = new Toy();
singletoy.play(); // Single toy
