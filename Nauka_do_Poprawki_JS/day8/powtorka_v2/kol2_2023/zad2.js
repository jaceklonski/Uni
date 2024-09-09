// Napisz funkcję (nie korzystając z Promise.all) porównującą wyniki dwóch
// asynchronicznych funkcji i zwracającą wynik porównania:
const porownaj = (fun1, fun2, cb) => {
    let wynik = null

    const cba = (a) => {
        if (wynik === null) {wynik = a}
        else cb(wynik, a)
    }

    fun1(cba)
    fun2(cba)
}
// taką, że:
// • jej dwoma pierwszymi argumentami są funkcje asynchroniczne fun1 i fun2
// zwracające obiekt klasy Promise (zwracające liczbę)
// • funkcja porownaj powinna zapewnić, że obie funkcje fun1 i fun2 wykonają
// się równolegle
// • trzecim argumentem cb jest callback przyjmujący jeden argument – wynik
// porównania (true/false). Funkcja wyświetla wynik porównania dwóch liczb
// • po otrzymaniu wyników z obu funkcji, funkcja porownaj powinna porównać
// te wyniki i przekazać wynik porównania do funkcji zwrotnej cb
// Uwaga! Aby końcowe rozwiązanie było kompletne, powinno zawierać wszystkie
// elementy potrzebne do wywołania funkcji oraz jej przykładowe wywołanie.
// // Przykładowy output

const fun1 = (cb) => setTimeout(() => cb(1), Math.random() * 1000)

const fun2 = (cb) => setTimeout(() => cb(1), Math.random() * 1000)

const fun3 = (cb) => setTimeout(() => cb(2), Math.random() * 1000)

const cb = (a,b) => {if (a == b) console.log( true)
    else console.log( false)
}

porownaj(fun1, fun2, cb); // Wynik porównania: false
porownaj(fun1, fun3, cb); // Wynik porównania: true