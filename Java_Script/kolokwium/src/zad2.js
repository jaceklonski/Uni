"use strict";

const shoppingList = require("./shopping-list.js").shoppingList;

function funkcja(arr) {
  const lista = arr.reduce((acc, curr) => {
    const { productType, productName, price, quantity } = curr;

    if (!acc[productType]) {
      acc[productType] = {};
      acc[productType].products = [];
      acc[productType].count = 0;
      acc[productType].totalValue = 0.0;
    }

    acc[productType].products.push(productName);
    acc[productType].count += quantity;
    acc[productType].totalValue += price;
    return acc;
  }, {});

  return lista;
}

console.log(funkcja(shoppingList));
