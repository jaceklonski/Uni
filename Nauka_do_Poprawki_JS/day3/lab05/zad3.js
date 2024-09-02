console.log([ 1, 3, 6, 2, 9 ].reduce((acc, elem, indx) => {acc.push(`${indx}: ${elem}`)
return acc}, []))