// Proxy pattern: An object that acts as a middleman (gatekeeper) between you and the real object.

// ATM Machine -> Bank Server

// You don’t directly access the bank server

// You interact with the ATM (proxy)

// ATM:
// checks your PIN
// checks balance
// then talks to the bank server

// ATM = Proxy
// Bank server = Real object

// Types of Proxy Pattern

// 1️⃣ Virtual Proxy
// Delays heavy object creation
// Example: images, 3D models

// 2️⃣ Protection Proxy
// Checks permissions
// Example: admin access

// 3️⃣ Logging Proxy
// Logs requests
// Example: API monitoring

// 4️⃣ Remote Proxy
// Represents object on another server
// Example: REST API, GraphQL

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
      return;
    }
    this.balance -= amount;
    console.log(`Withdraw successful. Remaining balance: ₹${this.balance}`);
  }
}

class ATM {
  constructor(bankAccount, pin) {
    this.bankAccount = bankAccount;
    this.correctPin = pin;
  }

  withdraw(amount, enteredPin) {
    if (enteredPin !== this.correctPin) {
      console.log("Incorrect PIN");
      return;
    }

    console.log("PIN verified");
    this.bankAccount.withdraw(amount);
  }
}

const myAccount = new BankAccount(5000);
const atm = new ATM(myAccount, 1234);

// Incorrect PIN
// atm.withdraw(1000, 1111);

// Correct PIN
atm.withdraw(1000, 1234);
