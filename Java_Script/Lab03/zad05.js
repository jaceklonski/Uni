"use strict";

const numberSplit = (a) => {
  let b = 0;
  let c = 0;
  b = a / 2;
  b = ~~b;
  c = a - b;
  return [b, c];
};

console.log(numberSplit(4));
console.log(numberSplit(11));
console.log(numberSplit(-9));
