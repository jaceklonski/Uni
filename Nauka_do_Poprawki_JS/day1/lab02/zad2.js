"use strict";

const array = [4, 2, "a", "b", 3, "aa", "ww", 2, "ab", -2];

function na_poczatku(arr, last_str, indx, arr_len) {
  if (indx < arr_len) {
    if (typeof arr[indx] === "number") {
      if (indx > last_str) {
        const liczba = arr[indx];
        const str = arr[last_str];
        arr[last_str] = liczba;
        arr[indx] = str;
        return na_poczatku(arr, arr_len, last_str, arr_len);
      } else {
        return na_poczatku(arr, last_str, indx + 1, arr_len);
      }
    } else {
      if (indx < last_str) return na_poczatku(arr, indx, indx + 1, arr_len);
      else {
        return na_poczatku(arr, last_str, indx + 1, arr_len);
      }
    }
  } else {
    return arr;
  }
}

console.log(na_poczatku(array, array.length, 0, array.length));
