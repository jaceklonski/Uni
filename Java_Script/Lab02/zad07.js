// Stwórz 4 obiekty person1, person2, person3 i person4, gdzie każdy z nich zawiera dwa pola:

//     name
//     age

// przyjmujące wartości kolejno:

//     Agata, 21
//     Tomasz, 25
//     Alicja, 31
//     Jan, 20

// Stwórz tablicę i dodaj do niej wszystkie stworzone osoby. Następnie stwórz pętle, w której obliczysz:

//     ile łącznie lat mają wspomniane osoby
//     średnią wieku

const person1 = {
  name: "Agata",
  age: 21,
};

const person2 = {
  name: "Tomasz",
  age: 25,
};

const person3 = {
  name: "Alicja",
  age: 31,
};

const person4 = {
  name: "Jan",
  age: 20,
};

const tablica = [person1, person2, person3, person4];

function SumaWieku(tablica, acc, wynik) {
  if (acc < tablica.length) {
    wynik += tablica[acc].age;
    return SumaWieku(tablica, acc + 1, wynik);
  } else {
    return wynik;
  }
}

console.log(SumaWieku(tablica, 0, 0));
