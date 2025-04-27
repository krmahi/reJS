/* The code `var fullName = "tony Stark";` is declaring a variable `fullName` and assigning it the
value "tony Stark". The comment `// don't use var anymore why?` is suggesting not to use the `var`
keyword anymore in modern JavaScript code due to the introduction of `let` and `const` which have
block scope and better variable declaration behavior. */
var fullName = "tony Stark"; // don't use var anymore why?
/* `let fullName_2 = "tony Stark";` is declaring a variable `fullName_2` using the `let` keyword and
assigning it the value "tony Stark". Using `let` allows the variable to have block scope, meaning it
is only accessible within the block it is declared in. This provides better control over variable
scoping compared to the older `var` keyword. */
let fullName_2 = "tony Stark";
/* `const fullName_3 = "tony Stark";` is declaring a constant variable `fullName_3` and assigning it
the value "tony Stark". The use of `const` ensures that the value of `fullName_3` cannot be
reassigned or changed throughout the program. Constants are useful when you want to define a
variable that should not be modified after its initial assignment. */
const fullName_3 = "tony Stark";
const PI = 3.14;
/* The line `let value;` is declaring a variable named `value` using the `let` keyword. However, it is
not assigning any initial value to the variable. In JavaScript, when a variable is declared using
`let` or `var` without an initial value, it is automatically assigned the value `undefined`. This
means that `value` is currently `undefined` until a value is assigned to it later in the code. */
let value;
value = 10;
/* The line `const value_2;` is attempting to declare a constant variable named `value_2` without
assigning it an initial value. However, this will result in a syntax error in JavaScript because
when using `const`, you must provide an initial value at the time of declaration. Constants cannot
be declared without an initial value because they are meant to be immutable and their value cannot
be changed once assigned. */
// const value_2;

/* The `{ }` in the code is an empty block statement. In JavaScript, a block statement is used to group
zero or more statements together. In this case, the empty block `{ }` does not contain any
statements inside it, so it essentially does nothing in terms of functionality. It is just an empty
block that does not affect the flow of the program. */
{
}

{
  let testValue = 2;
  console.log(testValue);
}
{
  let testValue = 10;
  console.log(testValue);
}

let age = 24;
// let type = typeof age;
let x = null;
/* The line `let y = BigInt("123");` is declaring a variable `y` and assigning it a BigInt value of
123. In JavaScript, `BigInt` is a built-in object that provides a way to represent whole numbers
larger than 2^53 - 1, which is the largest number that can be represented with the Number primitive.
By using `BigInt("123")`, you are creating a BigInt value of 123, which allows you to work with
integers of arbitrary length. This is useful when dealing with very large numbers that exceed the
limits of the Number type. */
let y = BigInt("123");
let z = Symbol("Hello!");
/* `console.log(typeof x);` is logging the data type of the variable `x` to the console. The `typeof`
operator in JavaScript is used to determine the type of a variable or value. In this case, it will
output the string "object" because `null` is considered an object in JavaScript. */
console.log(typeof x);
console.log(y);
console.log(z);
console.log(typeof age);
console.log(fullName);
console.log(fullName_2);
console.log(fullName_3);
console.log(PI);
console.log(value);
