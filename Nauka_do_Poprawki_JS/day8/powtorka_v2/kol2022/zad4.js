// Stwórz klasę Log, która będzie przechowywać historię komunikatów w aplikacji. Klasa ta powinna zawierać:
// 1. Funkcje write, która przyjmuje dowolną liczbę argumentów i zwraca je jako string np.:
// // Input:
// instancjaLog.write("test: ", () => {
// return "komunikat";
// });
// // Output:
// // "test: () => { return 'komunikat' }"
// 2. Funkcje printHistory, która przyjmuje opcjonalny parametr range. Funkcja zwraca wszystkie
// komunikaty wypisane z pomocą funkcji write. Powinny być one zwrócone jako jeden string, gdzie
// poszczególne komunikaty są rozdzielone znakiem nowej linii \n. Parametr range powinien być
// dwuelementową tablicą, gdzie:
// • nie może być ujemnych liczb,
// • pierwszy element powinien być mniejszy od drugiego elementu,
// • drugi element nie powinien być większy od ilości komunikatów w historii.
// Jeśli nie został przekazany do funkcji parametr range, to zwracane są wszystkie komunikaty w historii.
// instancjaLog.printHistory(); // cała historia
// instancjaLog.printHistory([1, 5]); // tylko komunikaty od 1 do 5 włącznie
// instancjaLog.printHistory([5, 1]); // błąd
// instancjaLog.printHistory([2]); // błąd
// 3. Funkcje clearHistory, która usuwa wszystkie wydrukowane komunikaty (sprawia,
// że printHistory zwraca pusty string).
// instancjaLog.clearHistory();
// instancjaLog.printHistory();// pusty strin

class Log {
    constructor() {

    }
    write(a, b) { return `${a} ${b}`}

    printHistory(){}
}