// flyweight design pattern: it is used to save memory by sharing the common objects instead of the creating similar objects.

// Example: You are developing a game with many trees 🌳🌳🌳

// In the game:

// There are thousands of trees
// Many trees are of the same type (Oak, Pine, Mango)

// If you create a new object for every tree
// 👉 the game will use too much memory and become slow.

// Solution: Use Flyweight pattern to share tree objects of the same type

class TreeType {
  constructor(name, texture, model) {
    this.name = name;
    this.texture = texture;
    this.model = model;
  }

  render(x, y) {
    console.log(`Rendering ${this.name} tree at (${x}, ${y})`);
  }
}

class TreeFactory {
  static treeTypes = {};

  static getTreeType(name, texture, model) {
    if (!this.treeTypes[name]) {
      this.treeTypes[name] = new TreeType(name, texture, model);
    }
    return this.treeTypes[name];
  }
}

class Tree {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw() {
    this.type.render(this.x, this.y);
  }
}

const trees = [];

trees.push(
  new Tree(10, 20, TreeFactory.getTreeType("Oak", "oak.png", "oak.glb"))
);
trees.push(
  new Tree(30, 40, TreeFactory.getTreeType("Oak", "oak.png", "oak.glb"))
);
trees.push(
  new Tree(50, 60, TreeFactory.getTreeType("Pine", "pine.png", "pine.glb"))
);

console.log(
  `Total tree types created: ${Object.keys(TreeFactory.treeTypes).length}`
);
