function consolelog(msg, num) {
  console.log(msg * num);
}
function sum(a, b) {
  return a + b;
}
consolelog(10, 20);
consolelog("starting in 3..2..1", 20); // NaN -> Not a Number
let sum_n = sum(2, 5);
console.log(sum_n);

// arrow functions

// (param1, param2, ..) => { }

const mul = (a, b) => {
  return a * b;
};

console.log(mul); // prints the mul object that contains the arrow function
console.log(mul(124, 611));

let add = (a, b) => {
  // can initialize with let, bcz add is just a variable
  return a + b;
};

console.log(typeof add); // (function) and can be changed from function object to another type
add = 2 + 4;
console.log(add); // 6
console.log(typeof add); //number

// clean type

const printHello = () => console.log("Hello"); // one line
