'use strict';

const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];
const anwser = [];

for (let x in numbers){
    let pass = 0
    for (let y in numbers){
        if (x != y && numbers[x] == numbers[y]){
            pass += 1}}
    console.log(numbers[x], pass)
    if (pass == 0){
                anwser.push(numbers[x])
            }
}

console.log(anwser)