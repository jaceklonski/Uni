// Przykład działania
// Wywołujemy funkcje

function getCounter(a,b){
    let counter = a - 1

    return function (){
        counter ++
        if (counter <= b){
            console.log(counter)
        }
        else{
            console.log(undefined)
        }
    }

}


const counter = getCounter(5, 7)
// Wywołujemy zwracaną przez getCounter funkcję, która daje output kolejno:

counter()
counter()
counter()
counter()