for (let i = 0; i <= 5; i++) {
  console.log("Hello");
}

// sum 1 -> 10000
let sum = 0;
for (let i = 0; i <= 10000; i++) {
  sum = sum + i;
}

console.log(sum);

// while loop
let i = 0,
  sum_2 = 0;
while (i <= 10000) {
  sum_2 = sum_2 + i;
  i++;
}

console.log(sum_2);

// do-while loop
let j = 0;
do {
  sum = sum + j;
  j++;
} while (j <= 10000);

console.log(sum);

// for-of (string and arrays)
str = "hello";
for (let val of str) {
  console.log(val);
}

// for-in
const objval = {
  name: "mahi",
  Age: "21",
};
for (let key in objval) {
  console.log(key, ":", objval[key]);
}
