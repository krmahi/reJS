// game where we start with a random number, keep guessing the correct number
// b/w 0 - 1000
let gameNum = 487;
let userNum = prompt("Enter you Number:");
console.log(userNum);

while (userNum != gameNum) {
  userNum = prompt("Wrong, Enter your guess again");
}

console.log("you found the number");
