// console.log([
//     { id: 'a', name: 'Ala' },
//     { id: 'b', name: 'Tomek' },
//     { id: 'c', name: 'Jan' }
//   ].reduce((acc, elem) => {acc.push({elem.id: elem})
// return acc}, []))

console.log([
         { id: 'a', name: 'Ala' },
        { id: 'b', name: 'Tomek' },
     { id: 'c', name: 'Jan' }
       ].reduce((acc, elem) => {
        id = elem.id
        krot = {[id]: {elem}}
        acc.push(krot)
        return acc
       }, []))