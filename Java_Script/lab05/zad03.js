'use strict';
const lista = [ -5, 4, -2, 4, -5 ] 

const indeksy = lista.reduce((arr, a, i) => {
    arr.push(`${i} : ${a}`)
    return arr
}, [])

console.log(indeksy)