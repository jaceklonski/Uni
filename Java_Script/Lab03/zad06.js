function isAnyEven(array) {
  return array.some((element) => element % 2 === 0);
}

console.log(isAnyEven([1, 4, 5, 3]));
console.log(isAnyEven([1, 3, 5, 3]));
