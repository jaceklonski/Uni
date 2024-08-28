function isPositiveEven(number) {
  if (number > 0 && typeof number === "number") {
    if (number % 2 == 0) {
      return true;
    } else return false;
  } else return false;
}

console.log(isPositiveEven(3));
console.log(isPositiveEven(4));
console.log(isPositiveEven(-3));
console.log(isPositiveEven("sat"));
