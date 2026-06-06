// Task 1

function bankAccount() {
  let initialBalance = 5000;

  return {
    deposit: (amt) => {
      initialBalance += amt;
      return initialBalance;
    },
    withdraw: (amt) => {
      initialBalance -= amt;
      return initialBalance;
    },
    checkBalance: () => {
      return initialBalance;
    },
  };
}

const bank = bankAccount();
console.log("deposit Amount", bank.deposit(500));
console.log("Withdraw Amount", bank.withdraw(1000));
console.log("Balance Amount", bank.checkBalance());

// Task 2

function attendanceCount() {
  let count = 0;

  return () => {
    count++;
    console.log("count", count);
  };
}

const count = attendanceCount();
count();
count();

// Task 3

function visitorCounter() {
  let visitors = 0;

  return function () {
    visitors++;
    console.log(`Total Visitors: ${visitors}`);
  };
}

const visit = visitorCounter();

visit(); // Total Visitors: 1
visit(); // Total Visitors: 2
visit(); // Total Visitors: 3
visit(); // Total Visitors: 4

// Task 4

const shoppingCart = () => {
  const products = [];
  return {
    add: (item) => {
      products.push(item);
      return products;
    },
    remove: () => {
      products.pop();
      return products;
    },
    total: () => {
      return products.length;
    },
  };
};
const shopping = shoppingCart();
console.log(`Products added ${shopping.add("pen")}`);
console.log(`Products added ${shopping.add("rubber")}`);
console.log(`Products removed ${shopping.remove()}`);
console.log(`Products Total ${shopping.total()}`);

// Task 5

const atmMachine = () => {
  let balance = 3000;
  const minimumBalance = 1000;

  return {
    withdraw: (amt) => {
      if (balance - amt < minimumBalance) {
        console.log("We should maintain the minimum balance");
      } else {
        balance -= amt;
        console.log(`Balance after withdraw, ${balance} `);
      }
    },
  };
};

const atm = atmMachine();
atm.withdraw(1000);
atm.withdraw(2000);

// Task 6

function loginAttemptTracker() {
  let attemptCount = 0;

  return function () {
    attemptCount++;
    console.log(`Login Attempt #${attemptCount}`);
  };
}

const login = loginAttemptTracker();

login();
login();
login();

// Task 7

function processPayment(callback) {
  callback();
}

const gpay = () => {
  console.log("gpay");
};
const phonepe = () => {
  console.log("phonepe");
};
const paytm = () => {
  console.log("paytm");
};
processPayment(gpay);
processPayment(phonepe);
processPayment(paytm);

// Task 8

function executeAction(callback) {
  callback();
}
const loginuser = () => {
  console.log("User Login succesfully");
};
const logout = () => {
  console.log("User logged out successfully");
};
const register = () => {
  console.log("User registered");
};

executeAction(loginuser);
executeAction(logout);
executeAction(register);

// Task 9

console.log("Sending Notification...");

setTimeout(() => {
  console.log("Notification Sent");
}, 3000);

// Task 10

function orderProcessingSystem() {
  let orderCount = 0;
  return (cb) => {
    orderCount++;
    console.log("Order Number", orderCount);
    console.log("Processing...");
    setTimeout(() => {
      cb();
    });
  };
}

const mobileOrder = () => {
  console.log("Mobile Ordered");
};

const laptopOrder = () => {
  console.log("Laptop ordered");
};
const tvOrder = () => {
  console.log("TV ordered");
};

const order = orderProcessingSystem();
order(tvOrder);
order(laptopOrder);
order(mobileOrder);
