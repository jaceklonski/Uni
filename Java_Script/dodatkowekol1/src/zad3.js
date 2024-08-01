const ships = require("./ships.js").shipsArray;

const result = ships
  .filter((ship) => ship.destroyed)
  .reduce((acc, ship) => {
    const { manufacturer, height, maximumSpeed, model } = ship;
    if (!acc[manufacturer]) {
      acc[manufacturer] = [];
    }

    const shipObject = {};
    shipObject[model] = { height, maximumSpeed };

    acc[manufacturer].push(shipObject);
    return acc;
  }, {});

console.dir(result, { depth: null });

// const protyp = pro.reduce();

// .reduce((acc, product) => {
//   const { type, ...rest } = product;
//   if (!acc[type]) {
//     acc[type] = {};
//   }

//   acc[type][product.product] = rest;

//   return acc;
// }, {})
