// Napisz funkcję (nie korzystając z Promise.all) porównującą wyniki dwóch
// asynchronicznych funkcji i zwracającą wynik porównania:
// const porownaj = (fun1, fun2, cb) => {
// // Uzupełnij
// }
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
// porownaj(func1, func2, cb); // Wynik porównania: false
// porownaj(func1, func3, cb); // Wynik porównania: true

const porownaj = (fun1, fun2, cb) => {
    let wynik = null
    fun1().then(result => {
        if (wynik === null) {
            wynik = result
        }
        else cb (wynik === result ? true : false)
    } )
    fun2().then(result => {
        if (wynik === null) {
            wynik = result
        }
        else cb (wynik === result ? true : false)
    } )
    }

const fun1 = () => {
        console.log("start 1");
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(2);
          }, 2000);
        });
      };
      
const fun2 = () => {
        console.log("start 2");
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(3);
          }, 1000);
        });
      };
      

const cb = (wynik) => {console.log(wynik)}

porownaj(fun1, fun2, cb)