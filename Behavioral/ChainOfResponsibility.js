// Chain Of Responsibility: A request is passed through a chain of handlers until one of them handles it.

// Each handler:
// decides “Can I handle this?”
// if yes → handles it
// if no → passes it to the next handler

// Example:
// Office Approval System
// Employee → asks for leave
// Manager → can approve up to 2 days
// Director → can approve up to 5 days
// CEO → approves more than 5 days
// Request goes step by step until someone approves it.

class Employee {
  constructor(name) {
    this.name = name;
    this.nextApprover = null;
  }
}

class Manager extends Employee {
  approveLeave(days) {
    if (days <= 2) {
      console.log(`Manager ${this.name} approved ${days} day(s) leave.`);
    } else if (this.nextApprover) {
      console.log(
        `Manager ${this.name} cannot approve ${days} day(s). Passing to Director.`
      );
      this.nextApprover.approveLeave(days);
    }
  }
}

class Director extends Employee {
  approveLeave(days) {
    if (days <= 5) {
      console.log(`Director ${this.name} approved ${days} day(s) leave.`);
    } else if (this.nextApprover) {
      console.log(
        `Director ${this.name} cannot approve ${days} day(s). Passing to CEO.`
      );
      this.nextApprover.approveLeave(days);
    }
  }
}

class CEO extends Employee {
  approveLeave(days) {
    console.log(`CEO ${this.name} approved ${days} day(s) leave.`);
  }
}

// Setting up the chain
const manager = new Manager("Alice");
const director = new Director("Bob");
const ceo = new CEO("Charlie");

manager.nextApprover = director;
director.nextApprover = ceo;

// Test cases
manager.approveLeave(1);
manager.approveLeave(3);
manager.approveLeave(7);
