// 10% offer on all items
let arr_1 = ["mahi"];
let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
  prices[i] -= (1 / 10) * prices[i];
}
// console.log(prices);
let idx = 0;
for (let price of prices) {
  prices[idx] -= price * (1 / 10);
  idx++;
}
// console.log(prices);
// console.log(prices.toString());
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
