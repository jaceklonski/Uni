// Napisz funkcję:
// const poKolei = (fun1, fun2, fun3, cb) => {
// // Uzupełnij
// };
// taką, że:
// • jej trzema pierwszymi argumentami są funkcje zwracające promise –
// możesz założyć, że funkcje te muszą być przygotowane na przyjęcie
// określonej listy argumentów, z których korzystać będzie po kolei
// • funkcja poKolei powinna zapewnić, że fun3 wykona się po fun2, które
// to wykona się zawsze po fun1. Wyniki wygenerowane przez fun1 zostaną
// przekazane do fun2, a wynik fun2 zostanie przekazany do fun3
// • czwartym argumentem jest „callback” cb, czyli funkcja, której zadaniem
// jest przetworzenie wyników zwracanych przez fun3
// • jeżeli któryś z promise'ów zakończy się porażką, funkcja ma dalej
// kontynuować swoje zadanie

const poKolei = (fun1, fun2, cb) => {
    fun0(fun1, fun2, "udalo sie", cb)
    };


const fun0 = (fun1, fun2, a , cb) => {return new Promise(
        resolve => {
            setTimeout(() => {
            console.log("fun0")
            resolve(a)}, 3000
            )
        })
        
        .then(res => fun1(fun2, res, cb))
    }


const fun1 = (fun2, a , cb) => {return new Promise(
    resolve => {
        setTimeout(() => {
        console.log("fun1")
        resolve(a)}, 3000
        )
    })
    
    .then(res => fun2(res, cb))
}

const fun2 = (a , cb) => {return new Promise(
    resolve => {
        setTimeout(() => {
        console.log("fun2")
        resolve(a)}, 3000
        )
    })
    
    .then(a => cb(a))
}

poKolei(fun1,fun2, (a) => console.log(a))