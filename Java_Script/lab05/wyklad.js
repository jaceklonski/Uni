const lib = {}; // Tworzymy obiekt lib, który będzie zawierał nasz moduł

lib.module = (function () { // Tworzymy moduł przy użyciu IIFE (Immediately Invoked Function Expression)
    // Prywatne zmienne i funkcje
    const privProperty = 7; // Prywatna zmienna
    const privFunction = (num) => privProperty * num; // Prywatna funkcja, która mnoży przekazany argument przez privProperty

    // Zwracamy obiekt, który będzie zawierał publiczne właściwości i metody
    return {
        pubProperty: 8, // Publiczna właściwość
        pubFunction: (number) => { // Publiczna metoda
            return privFunction(number); // Wywołujemy prywatną funkcję i zwracamy wynik
        }
    };
})();

console.log(lib.module.pubFunction(5));
console.log(lib.module.pubProperty)