// It provides an interface for creating objects but lets subclasses decide which class to instantiate

class Car {
  drive() {
    return "Driving a car....";
  }
}

class Bike {
  drive() {
    return "Driving a bike....";
  }
}

class Truck {
  drive() {
    return "Driving a truck....";
  }
}

class TransportFactory {
  createTransport(type) {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      case "truck":
        return new Truck();
        default:
            return "Unknown transport"
    }
  }
}

const factory = new TransportFactory();
 
const car = factory.createTransport("car");
console.log(car.drive(),"carrrr");

const bike = factory.createTransport("bike");
console.log(bike.drive(),"bikee");

const truck = factory.createTransport("truck");
console.log(truck.drive(),"truck");
