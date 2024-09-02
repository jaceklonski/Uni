const wishlist = [
    { name: 'Czajnik', netto: 100 },
    { name: 'Lodówka', netto: 2730 },
    { name: 'Mikrofalówka', netto: 940 },
    { name: 'Mikser', netto: 120 },
    { name: 'Piekarnik', netto: 3100 },
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]

console.log(wishlist.reduce((acc, elem) => {acc.push(elem.netto)
    return acc
},[]))

// console.log(wishlist.reduce((acc, elem) => {acc.push(`${elem.name} : ${elem.netto}`) 
// return acc}, []))

function tabifunk(tab, funk){
    const nowatab = tab.map((elem) => {return funk(elem)})
return nowatab}

console.log(tabifunk(wishlist, (x) => {return x.name + ": " + x.netto}))

function tabifunk2(tab, funk){
    const nowatab = tab.filter(funk)
return nowatab}

console.log(tabifunk2(wishlist, (x) => {return x.netto < 500}))