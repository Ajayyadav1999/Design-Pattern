// Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

// ============== Reason why to use Builder Pattern instead of traditional way of creating objects like house ============= //

class TraditionalWayHouse {
  constructor(walls, roof, doors, windows, garage, garden) {
    this.walls = walls;
    this.roof = roof;
    this.doors = doors;
    this.windows = windows;
    this.garage = garage;
    this.garden = garden;
  }

  showHouse() {
    console.log(
      `🏠 traditional way House with ${this.walls}, ${this.roof}, ${this.doors}, ${this.windows}, ${this.garage}, ${this.garden}`
    );
  }
}

const hut = new TraditionalWayHouse(
  "mud walls",
  "straw roof",
  "1 wooden door",
  "1 small window",
  "no garage",
  "no garden"
);
hut.showHouse();

// Problem:
// You have to pass everything at once (many parameters 😖).
// You can’t easily skip or change parts later.
// If you forget something (like windows), it breaks.
// You can’t control the order in which things are built.

// =================== Using Builder Pattern to solve above problems =================== //

// Step 1: Create the final house

class House {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  showHouse() {
    console.log(`🏠 House with: ${this.parts.join(", ")}`);
  }
}

// Step 2: Create the Builder

class HouseBuilder {
  reset() {}
  buildWalls() {}
  buildRoof() {}
  buildDoors() {}
  buildWindows() {}
  getResult() {}
}

// Step 3: Create a Concrete Builder

class ConcreteHouseBuilder extends HouseBuilder {
  constructor() {
    super();
    this.House = new House();
  }

  reset() {
    this.House = new House();
  }

  buildWalls() {
    this.House.addPart("walls");
  }

  buildRoof() {
    this.House.addPart("roof");
  }

  buildDoors() {
    this.House.addPart("doors");
  }

  buildWindows() {
    this.House.addPart("windows");
  }

  buildGarage() {
    this.House.addPart("garage");
  }

  buildGarden() {
    this.House.addPart("garden");
  }

  buildSwimmingPool() {
    this.House.addPart("swimming pool");
  }

  getResult() {
    return this.House;
  }
}

// Step 4: Create the Director
class Director {
  setBuilder(builder) {
    this.builder = builder;
  }

  constructMinimalHouse() {
    this.builder.reset();
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildDoors();
    this.builder.buildWindows();
    return this.builder.getResult();
  }

  constructLuxuryHouse() {
    this.builder.reset();
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildDoors();
    this.builder.buildWindows();
    this.builder.buildGarage();
    this.builder.buildGarden();
    this.builder.buildSwimmingPool();

    return this.builder.getResult();
  }
}

// Step 5: Use the Builder Pattern

const director = new Director();
const builder = new ConcreteHouseBuilder();
director.setBuilder(builder);

// Minimal house construction
const newHouse = director.constructMinimalHouse();
newHouse.showHouse();

// Luxury house construction
const luxuryHouse = director.constructLuxuryHouse();
luxuryHouse.showHouse();
