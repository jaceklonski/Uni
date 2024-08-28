"use strict";

const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

function iteracja(acc, aktualny, sprawdzany, tablica, tablica_len) {
  if (aktualny < tablica_len) {
    if (tablica_len == sprawdzany + 1) {
      acc.push(tablica[aktualny]);
      aktualny++;
      iteracja(acc, aktualny, 0, tablica, tablica_len);
    } else {
      if (tablica[aktualny] == tablica[sprawdzany] && aktualny != sprawdzany) {
        aktualny++;
        iteracja(acc, aktualny, 0, tablica, tablica_len);
      } else {
        sprawdzany++;
        iteracja(acc, aktualny, sprawdzany, tablica, tablica_len);
      }
    }
  } else {
    console.log(acc);
  }
}

iteracja([], 0, 1, numbers, numbers.length);
