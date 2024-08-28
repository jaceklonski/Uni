function isAnyEven(arr) {
  function check(arr, indx) {
    if (indx > arr.length) return false;
    else if (arr[indx] % 2 == 0) return true;
    else return check(arr, indx + 1);
  }

  return check(arr, 0);
}

console.log(isAnyEven([1, 4, 5, 3])); //=> true
console.log(isAnyEven([1, 3, 5, 3])); //=> false
