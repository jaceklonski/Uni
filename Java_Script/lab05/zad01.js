'use strict';
const lista = [ 'Ala', 'Janusz', 'kot', 'pies']
const lista2 = [ 1, 112, 13, 18 ]

const najdluzszy = lista2.reduce((biez, acc) => {
    
    const x = String(biez);
    const y = String(acc);

  return x.length > y.length ? biez : acc;
})

console.log(najdluzszy)