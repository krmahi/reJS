function Vowels(str) {
  let count = 0;
  for (const i of str) {
    i_new = i.toLowerCase();
    if (
      i_new === "a" ||
      i_new === "e" ||
      i_new === "i" ||
      i_new === "o" ||
      i_new === "u"
    ) {
      count++;
    }
  }
  return count;
}

const countVowels = (str) => {
  let count = 0;
  for (const i of str) {
    i_new = i.toLowerCase();
    if (
      i_new === "a" ||
      i_new === "e" ||
      i_new === "i" ||
      i_new === "o" ||
      i_new === "u"
    ) {
      count++;
    }
  }
  return count;
};

str = `AsdhAuifaopuiuywyuqcouyavsov${13}`;
count = Vowels(str);
console.log(count);
