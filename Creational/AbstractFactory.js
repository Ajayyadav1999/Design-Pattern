// We have a factory that makes other factories — and each factory makes a full set of matching items.

// 🏏 ABSTRACT FACTORY PATTERN - CRICKET EXAMPLE
// --------------------------------------------
// Imagine we have different cricket teams (India 🇮🇳 and Australia 💛)
// Each team has its own Bat, Ball, and Jersey styles.
// The Abstract Factory Pattern helps us create matching sets easily!
// --------------------------------------------

// STEP 1: Define abstract products (the blueprints)
class Bat {
  use() {
    throw new Error("use() must be implemented by subclass");
  }
}

class Ball {
  bowl() {
    throw new Error("bowl() must be implemented by subclass");
  }
}

class Jersey {
  wear() {
    throw new Error("wear() must be implemented by subclass");
  }
}

// 🇮🇳 STEP 2: Create India Team's concrete products
class IndiaBat extends Bat {
  use() {
    console.log("🏏 Swinging an Indian bat!");
  }
}

class IndiaBall extends Ball {
  bowl() {
    console.log("🥎 Bowling with an Indian ball!");
  }
}

class IndiaJersey extends Jersey {
  wear() {
    console.log("🇮🇳 Wearing Team India jersey!");
  }
}

// 🇦🇺 STEP 3: Create Australia Team's concrete products
class AustraliaBat extends Bat {
  use() {
    console.log("🏏 Swinging an Australian bat!");
  }
}

class AustraliaBall extends Ball {
  bowl() {
    console.log("🥎 Bowling with an Australian ball!");
  }
}

class AustraliaJersey extends Jersey {
  wear() {
    console.log("💛 Wearing Team Australia jersey!");
  }
}

// 🏭 STEP 4: Abstract factory (the rulebook for all factories)
class CricketFactory {
  createBat() {
    throw new Error("createBat() must be implemented");
  }
  createBall() {
    throw new Error("createBall() must be implemented");
  }
  createJersey() {
    throw new Error("createJersey() must be implemented");
  }
}

// 🏭 STEP 5: Concrete factories (make actual sets of gear)
class IndiaFactory extends CricketFactory {
  createBat() {
    return new IndiaBat();
  }
  createBall() {
    return new IndiaBall();
  }
  createJersey() {
    return new IndiaJersey();
  }
}

class AustraliaFactory extends CricketFactory {
  createBat() {
    return new AustraliaBat();
  }
  createBall() {
    return new AustraliaBall();
  }
  createJersey() {
    return new AustraliaJersey();
  }
}

// 🧒 STEP 6: Client code (the player who uses the factory)
function playCricket(factory) {
  // The player doesn’t know what exact bat/ball/jersey they get. They just ask the factory to give them the right set.
  const bat = factory.createBat();
  const ball = factory.createBall();
  const jersey = factory.createJersey();

  // Use the products
  jersey.wear();
  bat.use();
  ball.bowl();
}

// 🏁 STEP 7: Choose your team and play!
let team = "Australia";

let factory;

if (team === "India") {
  factory = new IndiaFactory();
} else if (team === "Australia") {
  factory = new AustraliaFactory();
} else {
  throw new Error("Unknown team selected");
}

console.log("🏏 Kit for:", team, "team!\n");
playCricket(factory);
