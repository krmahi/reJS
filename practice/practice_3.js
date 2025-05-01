// let Marks = prompt("What is the Marks:");
let Marks = 80;
let grade;

if (Marks <= 100 && Marks > 80) {
  grade = "A";
} else if (Marks <= 89 && Marks > 70) {
  grade = "B";
} else if (Marks <= 69 && Marks > 60) {
  grade = "C";
} else if (Marks <= 59 && Marks > 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`your grade is ${grade}`);
