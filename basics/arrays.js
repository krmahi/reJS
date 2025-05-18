arr_1 = ["mahi", 21, 82.22, `Distinction${2 + 2}`];
console.log(arr_1);
console.log(typeof arr_1);

marks = [1, 4, 1, 54, 1, 6, 1, 5];
console.log(marks);
console.log(typeof marks);

console.log(marks[100]); // -> undefined

// looping in array
for (let i = 0; i < marks.length; i++) console.log(`mark: ${marks[i]}`);

// using for - of
for (i of marks) console.log(`mark: ${i}`);

for (i of marks) console.log(`mark: ${typeof i.toString()}`);

// console.log(prices);
console.log(prices.toString());
console.log(prices);
console.log(prices.push(444));
console.log(prices);
console.log(prices.pop());
console.log(prices);
console.log(prices.concat(arr_1));
console.log(prices + "," + arr_1); // -> typeof string
console.log(prices.unshift(0));
console.log(prices);
console.log(prices.shift());
console.log(prices);
console.log(prices.slice(1, 4));
// prices.splice(2, 3, "mahi");
prices.splice(2, 0, "mahi");
console.log(prices);
prices.splice(1, 1);
console.log(prices);
//replace (replace mahi with price)
prices.splice(1, 1, 232, 234, 55);
console.log(prices);
console.log(prices.splice(3));
console.log(prices);
