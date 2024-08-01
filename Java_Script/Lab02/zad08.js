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

function SredniaWieku(tablica, acc, wynik) {
  if (acc < tablica.length) {
    wynik += tablica[acc].age;
    return SredniaWieku(tablica, acc + 1, wynik);
  } else {
    return wynik / acc;
  }
}

const srednia = SredniaWieku(tablica, 0, 0);

function nowetablice(tablica, acc, srednia, powyzej, ponizej) {
  if (acc < tablica.length) {
    if (tablica[acc].age > srednia) {
      powyzej.push(tablica[acc].name);
    } else {
      ponizej.push(tablica[acc].name);
    }
    return nowetablice(tablica, acc + 1, srednia, powyzej, ponizej);
  } else {
    return { powyzej, ponizej };
  }
}

console.log(nowetablice(tablica, 0, srednia, [], []));
