const arr = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];

const funk = (array, ozn) => {
console.log(array.map((elem) => {return elem[ozn]}).reduce((acc, elem) => {return acc + elem},0)/arr.length)}

funk(arr, 'x')