"use strict";

const _ = require("lodash");

const A = { person: { name: "John", age: 30 } };
const B = { person: { age: 35, city: "NY" } };

function mergeObjects(a, b) {
  return _.differenceWith(a, b, _.isEqual);
}

console.log(mergeObjects(A, B));
