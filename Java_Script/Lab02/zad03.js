'use strict';

const testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9];
const ANWS = [] 

for (let a of testArray){
    if (typeof a === 'object' && a != null){
        for (let obj of a){
            ANWS.push(obj)
        }
    }
    else{
        ANWS.push(a)
    }
}

console.log(ANWS)

