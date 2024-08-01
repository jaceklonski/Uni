const _ = require("lodash");

const arr = [
  { x: 4, y: 2 },
  { x: 1, y: 8 },
  { x: 4, y: 2 },
];

function ArrSort(arr, o) {
  const sum = arr.reduce((acc, obj) => acc + obj[o], 0);
  return sum;
}

console.log(ArrSort(arr, "x") / arr.length);
console.log(ArrSort(arr, "y") / arr.length);
