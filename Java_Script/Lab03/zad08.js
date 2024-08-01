const persons = [
  { name: "Jan", age: 22 },
  { name: "Grzegorz", age: 19 },
  { name: "Halina", age: null },
  { name: "Agata", age: 24 },
  { name: "Krzysztof", age: 40 },
  { name: "Adam", age: 29 },
];

function Sortowanie(arr, acc) {
  arr.sort((a, b) => a.age - b.age);
  arr.forEach((element) => {
    if (element.age !== null) {
      acc.push(element.name);
    }
  });
  return acc;
}

console.log(Sortowanie(persons, []));
