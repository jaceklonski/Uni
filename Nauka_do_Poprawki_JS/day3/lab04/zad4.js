const iife = (function(a){return a.split(" ").sort((a,b) => {return b.length - a.length})[0]})

console.log(iife("Ala ma kota"))