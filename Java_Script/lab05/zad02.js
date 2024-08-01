'use strict';
const lista = [ -5, 4, -2, 4, -5 ]  
// [ 25, 4, 4, 4, 25 ]

const kwadrat = lista.reduce((arr, a) => {
    a < 0 ? arr.push(a*a) : arr.push(a);
    return arr
},[])

console.log(kwadrat)