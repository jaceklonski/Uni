'use strict';

const cat = {
    name: 'Filemon',
    age: 6
  }

cat.description = `Kot ma na imię${cat.name} i ma ${cat.age} lat.`
console.log(cat.description)

cat.breed = 'pers'
cat.colour = 'szarego'

cat.description += ` Jest rasy ${cat.breed} i ma sierść koloru ${cat.colour}.`
console.log(cat.description)
