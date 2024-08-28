const person1 = { name: "Agata", age: 21 };
const person2 = { name: "Tomasz", age: 25 };
const person3 = { name: "Alicja", age: 31 };
const person4 = { name: "Jan", age: 20 };

const arr = [person1, person2, person3, person4];

function podziel_wiek(arr, pow, pon, arr_len, indx, srednia) {
  if (indx < arr_len) {
    if (arr[indx].age > srednia) {
      pow.push(arr[indx]);
    } else {
      pon.push(arr[indx]);
    }
    podziel_wiek(arr, pow, pon, arr_len, indx + 1, srednia);
  } else {
    console.log(pon);
    console.log(pow);
  }
}

function wiek(arr, acc, indx, arr_len) {
  if (indx < arr_len) {
    return wiek(arr, acc + arr[indx].age, indx + 1, arr_len);
  } else {
    return acc;
  }
}

podziel_wiek(
  arr,
  [],
  [],
  arr.length,
  0,
  wiek(arr, 0, 0, arr.length) / arr.length
);
