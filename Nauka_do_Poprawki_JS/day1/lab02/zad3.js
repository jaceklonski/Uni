"use strict";

const testArray = [
  1,
  2,
  null,
  [4, undefined, 11, 10],
  6,
  [7, null, 0],
  null,
  9,
];

function arr_push(arr, acc, arr_len, indx) {
  if (arr_len > indx) {
    if (Array.isArray(arr[indx])) {
      return arr_push(arr, splaszcz(arr[indx], acc, 0), arr_len, indx + 1);
    } else {
      acc[acc.length] = arr[indx];
      return arr_push(arr, acc, arr_len, indx + 1);
    }
  } else return acc;
}

function splaszcz(arr, acc, indx) {
  if (arr.length > indx) {
    acc[acc.length] = arr[indx];
    return splaszcz(arr, acc, indx + 1);
  } else {
    return acc;
  }
}

console.log(arr_push(testArray, [], testArray.length, 0));
