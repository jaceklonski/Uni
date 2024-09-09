// Zadanie 3.
// Stwórz funkcję getCounter, która jako parametr przyjmuje dwie wartości – min i max. Funkcja powinna
// zwrócić funkcję, która przy każdym wywołaniu zwraca liczbę o 1 większą niż poprzednio zwrócona począwszy
// od podanej wartości minimalnej, a kończąc na maksymalnej. Każde kolejne wywołanie powinno zwrócić
// undefined.
// Uwaga! Rozwiązanie tego zadania nie może używać zmiennych globalnych!
// // Przykład działania
// // Wywołujemy funkcje
// getCounter(5, 7)
// // Wywołujemy zwracaną przez getCounter funkcję, która daje output kolejno:
// Pierwsze wywołanie => output: 5
// Drugie wywołanie => output: 6
// Trzecie wywołanie => output: 7
// Czwarte wywołanie => output: undefined

function getCounter(min, max) {
    let current = min - 1; 
  
    return function() {
      if (current < max) {
        current += 1;
        return current;
      } else {
        return undefined;
      }
    };
  }
  
const counter = getCounter(5,7)

console.log(counter())