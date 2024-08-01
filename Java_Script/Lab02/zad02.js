'use strict';

const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];
const anwser = [];

for (let a of array){
    if (typeof a === 'number'){
        anwser.push(a)
    }
}

console.log(anwser)