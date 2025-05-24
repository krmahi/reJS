// square of each value in array
arr = [
  12, 4515, 62237, 1, 7, 15, 4671, 4, 36, 3, 7, 2345, 537, 2345, 245, 67, 790,
  890, 24,
];
arr.forEach((e, idx) => {
  console.log(idx, e ** 2);
});

arr.forEach((e) => {
  console.log(e / 2);
  console.log(Math.floor(e / 2));
});
