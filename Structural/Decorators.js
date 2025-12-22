// Decorator pattern: decorator pattern is used to add new functionality to an existing object without altering its structure.

// Component class
class IceCream {
  cost() {}
}

// Plain Ice Cream
class PlainIceCream extends IceCream {
  cost() {
    return 10;
  }
}

// Decorator base class
class IceCreamDecorator extends IceCream {
  constructor(iceCream) {
    super();
    this.iceCream = iceCream;
  }

  cost() {
    return this.iceCream.cost();
  }
}

class Chocolate extends IceCreamDecorator {
  cost() {
    return super.cost() + 5;
  }
}

class Nuts extends IceCreamDecorator {
  cost() {
    return super.cost() + 3;
  }
}

let originalIceCream = new PlainIceCream();
console.log("Cost of Plain Ice Cream: " + originalIceCream.cost());

originalIceCream = new Chocolate(originalIceCream);
console.log("Cost of Ice Cream with Chocolate: " + originalIceCream.cost());

originalIceCream = new Nuts(originalIceCream);
console.log(
  "Cost of Ice Cream with Chocolate and Nuts: " + originalIceCream.cost()
);
