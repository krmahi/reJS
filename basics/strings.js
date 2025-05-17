let str = "Hello";
console.log(str);
console.log(typeof str);
console.log(str.length);

console.log(`my string ${str} ends here`);

const obj = {
  name: "mahi",
  age: 21,
  hobby: "Art",
};

console.log(`name: ${obj.name} | age: ${obj.age} | hobby: ${obj.hobby}`);
console.log(`test string for template literal expression ${1 + (2 + 3) * 4}`);

// escape characters
// \n -> new line
// \t -> tab space
let str2 = "new\n\tline";
console.log(str2);
console.log(str2.length);

// string methods

const str3 = "Are you gonna be fine!       ";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());
console.log(str3.slice(2, 5));
console.log(str3.concat(str));
console.log(str3.charAt(8));
console.log(str3.replace("n", "g")); // finds the first occurence
