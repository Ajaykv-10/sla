// Task 1

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};
console.log(getFullName("Vasanth", "Selvan"));

// Task 2

const getTotalAmount = (price, quantity) => {
  return price * quantity;
};
console.log(getTotalAmount(1000, 4));

// Task 3

const isEligibleVoter = (age) => {
  return age >= 18 ? true : false;
};
isEligibleVoter(21);

// Task 4

const getLargestNumber = (...arg) => {
  console.log(Math.max(...arg));
  return Math.max(...arg);
};
getLargestNumber(7, 5, 4);

//Task 5

const getUserName = (userName = "Guest") => {
  console.log(userName);
  return userName;
};
getUserName("Ajay");
getUserName();

// Task 6

const operations = (a, b) => {
  return {
    sum: a + b,
    Difference: a - b,
    Multiplication: a * b,
    Division: a / b,
  };
};
const operation = operations(4, 2);
console.log(operation.Division);

// Task 7

const getTotalAverageMark = (...args) => {
  const totalMarks = args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return {
    total: totalMarks,
    average: totalMarks / args.length,
  };
};
console.log(getTotalAverageMark(89, 78, 90, 87, 96).average);

// Task 8

const getTotalSalaryAmount = (salary) => {
  const hra = (salary * 20) / 100;
  const da = (salary * 10) / 100;
  const totalSalary = salary + hra + da;
  return {
    hra,
    da,
    totalSalary,
  };
};
const salaryAmount = getTotalSalaryAmount(20000);
console.log(salaryAmount);

// Task 9

const convertFarenheit = (celcius) => {
  const farenheit = (celcius * 9) / 5 + 32;
  return farenheit;
};
convertFarenheit(26);

// Task 10

const oddoreven = (num) => {
  return num % 2 == 0 ? "even" : "odd";
};
oddoreven(2);
oddoreven(3);

// Task 11

const lengthOfString = (str) => {
  return str.length;
};
console.log("lengthOfString", lengthOfString("Ajay"));

// Task 12

const printName = (name, count) => {
  for (let i = 0; i < count; i++) {
    console.log(name);
  }
};
printName("Ajay", 3);

// Task 13

const totalMarks = (...rest) => {
  return rest.reduce((acc, curr) => acc + curr, 0);
};
console.log(totalMarks(67, 78, 87, 98, 85));

// Task 14

const largestNumber = (...rest) => {
  return Math.max(...rest);
};

largestNumber(56, 76, 89, 46, 45);

// Task 15

const smallestNumber = (...rest) => {
  return Math.min(...rest);
};
smallestNumber(4, 6, 3, 7, 8);

// Task 16

const totalPrice = (...prices) => {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
};

totalPrice(45, 65, 78, 98);
