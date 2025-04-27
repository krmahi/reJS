const student = {
  fullName: "mahi",
  age: 22,
  cgpa: 8.3,
  pass: true,
};

console.log(student);
console.log(student.fullName);
console.log(student.age);
console.log(student.cgpa);
console.log(student.pass);
// or
console.log(student["fullName"]);
console.log(student["age"]);
console.log(student["cgpa"]);
console.log(student["pass"]);

student.age += 1;
console.log(student.age);
