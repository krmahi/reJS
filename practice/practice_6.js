// avg of marks of class
marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i of marks) {
  sum += i;
}

console.log(`Average of class: ${sum / marks.length}`);
