function multiply(x, y) {
  return (a) => x * y * a;
}

console.log(multiply(4, 5)(6));

// function multi(x) {
//   const obl = 7;
//   return function (y) {
//     return function (z) {
//       return x * y * z * obl;
//     };
//   };
// }

// console.log(multi(5)(6)(7));
