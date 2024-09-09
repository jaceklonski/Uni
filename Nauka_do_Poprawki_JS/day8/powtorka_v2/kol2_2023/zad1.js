// Mamy tablicę obiektów reprezentujących produkty, z których każdy ma nazwę, cenę
// i ilość. Na przykład:
const products = [
{ name: 'Product 1', price: 10, quantity: 2 },
{ name: 'Product 2', price: 5, quantity: 4 },
{ name: 'Product 3', price: 8, quantity: 3 },
{ name: 'Product 4', price: 12, quantity: 1 },
];
// Utwórz funkcję asynchroniczną calculateTotalValue, która równolegle
// uruchamia n kopii funkcji calculateProductValue
// (1 <= n <= Array.length), gdzie każda kopia oblicza wartość pojedynczego
// produktu (mnożąc cenę przez ilość) i zwraca wynik.
// Przykładowo: wywołanie funkcji calculateTotalValue(3) oblicza
// wartość trzech pierwszych elementów z tablicy.
// Następnie, funkcja calculateTotalValue sumuje otrzymane wartości
// produktów i zwraca jako wynik końcowy (który zostaje wyświetlony poprzez
// „callback” cb.
const calculateProductValue = (product, cb) => {
setTimeout(() => {
const value = product.price * product.quantity;
cb(value);
}, Math.floor(Math.random() * 1000));
};

const calculateTotalValue = (n, cb) => {
    const tab = []
    const promise = (a) => {if (a < n) {tab.push(new Promise(resolve => calculateProductValue(products[a], resolve)))
        promise(a+1)}
    }
    promise(0)
    Promise.all(tab).then(result => cb(result.reduce((a,b) => {return a + b}, 0)))
};

calculateTotalValue(3, (response) => {
console.log('Wynik', response);
});

