// Adapter Pattern:
// It helps objects with different or incompatible interfaces work together.

// Example:
// You know how to play cricket using a normal (old) bat.
// One day, your friend brings a new electronic bat to the ground.
// This new bat works differently, but you do not want to change your batting style.
// So, you create an adapter that translates your old playing technique
// into something the electronic bat understands.



// Advantage:  Adapter lets you add new behavior without touching old code.


class OldBat {
  hitBall() {
    console.log("Hitting the ball with normal way ");
  }
}

class ElectronicBat {
  swing() {
    console.log("Electronic bat swings and count runs Automatically");
  }
}

// Adapter class
class BatAdapter {

  constructor(electronicBat) {
    this.electronicBat = electronicBat
  }

  hitBall(){
    this.electronicBat.swing();
  }

}


const oldBat = new OldBat();
oldBat.hitBall();

const electronicBat = new ElectronicBat();
const batAdapter = new BatAdapter(electronicBat);

batAdapter.hitBall();
