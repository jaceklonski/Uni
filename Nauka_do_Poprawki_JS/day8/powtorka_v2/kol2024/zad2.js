// Napisz funkcję z wykorzystaniem jedynie funkcji wbudowanej reduce, która
// zwróci obiekt zawierający podsumowanie zakupów według rodzaju produktów.
// Kluczami obiektu są różne rodzaje produktów, a wartościami obiekty zawierające
// informacje, o każdym rodzaju produktu, takie jak:
// • całkowita wartość zakupów (totalValue)
// • liczba sztuk (count)
// • oraz tablica nazw produktów (products)
// // Oczekiwany output
// {
// bakery: {
// totalValue: 2.5,
// count: 1,
// products: [ 'bread' ]
// },
// dairy: {
// totalValue: 78.4,
// count: 16,
// products: [ 'milk', 'eggs', 'butter', 'cheese' ]
// },
// vegetables: {
// totalValue: 10.3,
// count: 2,
// products: [ 'tomatoes', 'vell Peppers' ]
// },
// spices: {
// totalValue: 3,
// count: 1,
// products: [ 'sugar' ]
// },
// beverages: {
// totalValue: 25,
// count: 2,
// products: [ 'coffee', 'tea' ]
// }
// }

const lista = require("./shopping-list.js").shoppingList

const fun = (tab) => {
    console.log(tab.reduce((a,b) => {
        if(!a[b.productType]) a[b.productType] = {totalValue: 0,
            count: 0,
            products: []
        }

        a[b.productType].totalValue += b.price
        a[b.productType].count += b.quantity
        a[b.productType].products.push(b.productName)

        return a
    }, []))
}
fun(lista)
