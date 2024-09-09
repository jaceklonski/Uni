// Stwórz funkcję detectChanges, która przyjmuje dwa parametry:
// • original – obiekt,
// • modified – obiekt o takiej samej strukturze, jak original ze zmienionymi niektórymi wartościami.
// Uzupełnij funkcję tak, aby zwracała tablicę, zawierającą parę klucz-wartość, gdzie wartość uległa zmianie.
// Funkcja powinna działać dla różnych obiektów, z różnymi parami klucz-wartość.
// function detectChanges(original, modified) {
// // Uzupełnij
// }
// // Przykład 1
// const object1 = {
// id: 2,
// name: 'Przyjaciele',
// startYear: 1994,
// endYear: 2004,
// type: ["Komedia"],
// seasons: 10
// };
// const object2 = {
// id: 2,
// name: 'Przyjaciele edytowany',
// startYear: 1994,
// endYear: 2010,
// type: ["Komedia"],
// seasons: 10
// };
// detectChanges(object1, object2);
// // => [ [ 'name', 'Przyjaciele edytowany' ], [ 'endYear', 2010 ] ]
// // Przykład 2
// const object1 = {
// value: { field: "old value" },
// name: 'test'
// }
// const object2 = {
// value: { field: "new value" },
// name: 'test'
// }
// detectChanges(object1, object2);
// // => [ [ 'value', { field: 'new value' } ] ]
const _ = require("lodash")

function detectChanges(obj1, obj2){
    const og = _.reduce(obj1, (acc, key, value) => {
        acc.push([value, key])
        return acc
    }, [])

    const edit = _.reduce(obj2, (acc, key, value) => {
        acc.push([value, key])
        return acc
    }, [])

    return edit.reduce(
        (acc, elem, indx) => {
        if(_.isEqual(elem[0], og[indx][0]) && _.isEqual(elem[1], og[indx][1])) return acc
        else {acc.push(elem)
            return acc}
        }
    )

}

const object1 = {
value: { field: "old value" },
name: 'test'
}
const object2 = {
value: { field: "new value" },
name: 'test'
}

console.log(detectChanges(object1, object2));