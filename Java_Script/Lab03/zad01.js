// function func1() {
//     console.log('func1')
// }

// const func2 = function() {
//     console.log('funct2')
// }

// const funct3 = () => {
//     console.log('funct3')
// }


// function isPositive(a){
//     // if (a > 0) {
//     //     return true}
//     // else {return false} lipa bo długie

//     // (a > 0) ? true : false; masło maślane

//     return a>0; //this is the way
//     }

// func1();
// func2();
// funct3();
// isPositive(5);

// ========================================================
// ========================================================

'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co wypisze funkcja dla każdego z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.  //??

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val1, val2) {
    (val1 == val2) ? console.log('A') : console.log('B');
    (val1 === val2) ? console.log('C') : console.log('D');
}

// isEquals(2, '2');    //A - funkcja porównuje tylko wartość nie typ     D - === porównuje typy
// isEquals(null, undefined);   //B - wydaje mi się że undefined ma wartość która jest niezidentyfikowana?    D - null i undefined to 2 różne typy
// isEquals(undefined, NaN);    //B   D
// isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); //BD - indeksy tych samych wartości się różnią
// isEquals(0, '');     //A - znak pusty przyjumje wartość 0 przy konwersji na inny typ    D - typy
// isEquals('0', '');   //BD- nie ma potrzeby konwersji więc '' nie zmienia się w 0
// isEquals(+0, -0);    //false - +0 i -0 w kodzie binarnym się zapisuje inaczej więc wydaje mi się że będą to różne wartości
// isEquals(0, false);  //AD - false przyjmuje wartość 0 a true pewnie 1, ale są różnych typów
// isEquals(0, 'false');    //BD - nie wiem czemu miałoby się równać ale może się zdziwię
// isEquals([1, 2], '1,2'); //AD

// Co zwróci każde z poniższych wyrażen?
!!false; //false
!!true; //true
!!undefined;    //false
!!null;     //false

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

// console.log(person);
// person = {};
// console.log(person);

// firstName: Jan
// lastName: Kowalski
// [Jan, Kowalski]

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// let number = 3;
// console.log(number); {
//     let number = 4;
//     console.log(number);
// }
// console.log(number);

//3
//4
//3
// Wydaje mi się że w przypadku {'let number = 4'} number jest zmienną lokalną

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

// const arr = [1, 2];
// const newArr1 = [arr, 3, 4];
// console.log(newArr1);
// const newArr2 = [...arr, 3, 4];
// console.log(newArr2);

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// const word = 'javascript';
// const arrWord = [...word];
// console.log(arrWord);

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

// var hello = 'Hello world!';
// var result = hello / 2;

// console.log(result);

// console.log(Number.isNaN(result));
// console.log(Number.isNaN(hello));

//true bo dzielimy string na 2
//false bo wynik = NaN

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

// if (true) {
//     var a = 2;
// }
// console.log(a);

// if (true) {
//     const b = 2;
// }
// console.log(b);

// -------

// console.log(a) wyświetli 2
// console.log(b) nie wyświetli bo jest poza blokiem kodu

// Dla sprawdzenia działania obu poniższych pętli odkomentuj najpierw jedną, później drugą.
// Jaki będzie rezultat, jeśli obie pętle bedą odkomentowane jednocześnie. Wyjaśnij dlaczego.

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

//pierwszy log wyświetli 10 bo to pierwsza liczba < 10
//

// -------

// var test = "var1";
// var test = "var2";

// let test2 = "let1";
// let test2 = "let2";

// var będzie działał
// a w przypadku let'a nie ma możliwości zadeklarowania ponownie zmiennej



// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// żeby JS był bardziej rystrykcyjny wobec typów