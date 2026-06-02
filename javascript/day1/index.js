// Task 1
// Variable Declaration & Reassignment

var typeOfVehicle = "car";
console.log("typeOfVehicle:initial", typeOfVehicle);

typeOfVehicle = "bike";
console.log("typeOfVehicle:updated", typeOfVehicle);

let rating = 8;
console.log("rating:initial", rating);

rating = 7;
console.log("rating:updated", rating);

const duration = 60;
console.log("duration", duration);

// typeOfVehicle and rating variable can be reassigned because it has var and let keyword respectively.
// duration variable cannot be reassigned because it is a constant variable.

// Task 2: Scope Challenge

// Global scope
var maxSpeed = 100;

// Function Scope
function display() {
  var name = "Ajay";
  console.log("name inside local", name);
  console.log("maxSpeed from global to local", maxSpeed);
}

display();
console.log("name outside local", name);
// Block scope

if (true) {
  let isCharged = true;
  var price = 1000;
  console.log("isCharged inside block", isCharged);
  console.log("maxSpeed from global to block", maxSpeed);
  console.log("price inside block", price);
}
//  console.log("isCharged outside block",isCharged)
console.log("price outside block", price);

//   Task 3: Lexical Scope

const getResult = () => {
  let parantValue = 200;
  return () => {
    let childValue = 100;
    return () => {
      console.log("parantValue", parantValue);
      console.log("childValue", childValue);
    };
  };
};
getResult()()();

// Task 4: Scope Chain Search

const company = "SLA";

function level1() {
  function level2() {
    function level3() {
      console.log("company", company);
    }
    level3();
  }
  level2();
}
level1();

/* Javascriptfind the variable using scope chaining.
   We are accessing company varible inside level3 function, so js 
   search for the variable name inside level3 local context, if its not 
   found, its search for lexical scope of level3, ie-> parant scope-level2.
   if variable not found in lexical scope of level3, then it finds variable in lexical scope of level2,
   ie-level1. Also company is not in level1 scope.then its looks upto the 
   global context. It finds the variable and prints it. */
