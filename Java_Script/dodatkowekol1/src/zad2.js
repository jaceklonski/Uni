const _ = require("lodash");

function filterObjects(arr, criteria, partialmatch = false) {
  return _.filter(arr, (obj) => {
    return _.every(criteria, (value, key) => {
      if (partialmatch) {
        return _.some(obj, (objValue, objKey) => {
          if (objKey === key && _.isString(objValue) && _.isString(value)) {
            return objValue.includes(value);
          } else {
            return objKey === key && _.isEqual(objValue, value);
          }
        });
      } else {
        return _.isEqual(_.get(obj, key), value);
      }
    });
  });
}

// Przykład działania

const array = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];

console.log(filterObjects(array, { name: "Jo" }, true));
// Output: [{ id: 1, name: 'John', age: 30 }]

console.log(filterObjects(array, { age: 3 }, true));
// Output: []

console.log(filterObjects(array, { age: 3 }));
// Output: [{ id: 3, name: 'Bob', age: 35 }]
// Nie rozumiem czemu miałoby tak to działa