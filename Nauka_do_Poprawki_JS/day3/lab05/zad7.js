const shopping = require('./shoppingList.js').shoppingList;

console.log(shopping.reduce((acc, element) => {
const {type, product, quantity, price, unit} = element

if (!acc[type]){acc[type] = {}}

acc[type][product] = {quantity, price, unit}

return acc

}, {}))

const types = shopping.reduce((acc, {type}) => {
    if (!acc.includes(type)) {
        acc.push(type);
    }
    return acc;
}, []);

const sorted = shopping.reduce((acc, { product, type }) => {
    const index = types.indexOf(type);

    if (!acc[index]) {
        acc[index] = [];
    }

    acc[index].push(product);

    return acc;
}, []).map((element) => element.map((prod, index) => {return `${index + 1}: ${prod}`}));

console.log(sorted)

const fin = types.reduce((acc, element, indx) => {const str = `${element}:\n` + sorted[indx].reduce((acc, elem) => {return acc + `${elem}\n`}, "") + `\n`
return acc + str}, "")

console.log(fin)
