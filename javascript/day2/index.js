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
