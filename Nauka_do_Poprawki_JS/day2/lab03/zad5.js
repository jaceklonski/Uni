function numberSplit(a) {
  if (a % 2 == 0) {
    return [a / 2, a / 2];
  } else {
    return [(a - 1) / 2, (a + 1) / 2];
  }
}

console.log(numberSplit(4)); //=> [2, 2]
console.log(numberSplit(11)); //=> [5, 6]
console.log(numberSplit(-9)); //=> [-5, -4]
