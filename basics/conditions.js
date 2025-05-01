// let mode = "dark-mode";
let mode = "white-mode";
let color;
if (mode === "dark-mode") {
  color = "Grey";
}

if (mode === "white-mode") {
  color = "Cream";
}
console.log(color);

let num = 10;
// console.log(num);
if (num % 2 === 0) {
  console.log(num, "even");
} else {
  console.log(num, "false");
}

if (num == 10) console.log(num, !num);

// Ternay operator

h = num > 5 ? "greater than 5" : "less than 5";

console.log(h);

let fruit = "Mangoes";

switch (fruit) {
  case "Papaya":
    console.log("here you go, your papaya");
    break;
  case "Mangoes":
    console.log("here you go, your Mangoes");
    break;
  default:
    console.log(`sorry we are out of ${fruit}`);
}
