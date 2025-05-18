let companies = ["Blooberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// remove 1st company
companies.shift();
console.log(companies);
companies.splice(2, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
