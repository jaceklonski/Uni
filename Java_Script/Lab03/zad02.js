'use strict';

function isPositiveEven(number) {
    return number > 0 && number % 2 === 0;
}

console.log(isPositiveEven(6))
console.log(isPositiveEven(5))
console.log(isPositiveEven(-4))