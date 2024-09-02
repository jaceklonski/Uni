const games = require('./games.js').games;

console.log(games.reduce((acc, elem) => {acc.push(elem.imageUrl)
    return acc
}, []))