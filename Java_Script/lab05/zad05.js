"use strict";

const wishlist = [
  { name: "Czajnik", netto: 100 },
  { name: "Lodówka", netto: 2730 },
  { name: "Mikrofalówka", netto: 940 },
  { name: "Mikser", netto: 120 },
  { name: "Piekarnik", netto: 3100 },
  { name: "Zmywarka", netto: 2400 },
  { name: "Toster", netto: 260 },
];

const indeksy2 = wishlist.reduce((arr, a) => {
  arr.push(a.netto);
  return arr;
}, []);

console.log(indeksy2);
console.log(wishlist);

// const indeksy3 = wishlist.reduce((arr, a) => {
//   arr[a.name] = a.netto;
//   return arr;
// }, {});
// console.log(indeksy3);

function func(list, func) {
  return list.reduce((accumulator, currentItem) => {
    accumulator.push(func(currentItem));
    return accumulator;
  }, []);
}

function func1(list, func) {
  return list.reduce((accumulator, currentItem) => {
    if (func(currentItem)) {
      accumulator.push(currentItem);
    }
    return accumulator;
  }, []);
}

const newArray = func(wishlist, (x) => x.name + ": " + x.netto);
console.log(newArray);

const newArray1 = func1(wishlist, (x) => x.netto < 500);
console.log(newArray1);
