"use strict";
const fs = require("fs");

const games = require("./games.js").games;

const Urls = games.reduce((arr, b, index) => {
  if (index < 4) {
    arr.push(b.imageUrl);
  }
  return arr;
}, []);

console.log(Urls);

fs.writeFile("result_zad7.txt", Urls, (err) => {
  if (err) throw err;
});
