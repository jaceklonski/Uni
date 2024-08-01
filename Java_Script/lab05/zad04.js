'use strict';
const lista = [
    { id: 'a', name: 'Ala' },
    { id: 'b', name: 'Tomek' },
    { id: 'c', name: 'Jan' }
  ]

  const indeksy2 = lista.reduce((arr, a) => {
    
    arr.push(a.id)
    return arr
}, [])

console.log(indeksy2)