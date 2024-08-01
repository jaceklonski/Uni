"use strict";

const fs = require("fs");

const pro = require("./shoppingList.js").shoppingList;

const protyp = pro.reduce((acc, product) => {
  const { type, ...rest } = product;
  if (!acc[type]) {
    acc[type] = {};
  }

  acc[type][product.product] = rest;

  return acc;
}, {});

// const prostr = protyp.reduce((acc, product, index) => {
//     product[index]
// })

console.log(protyp);
