const persons = [
  { name: "Jan", age: 22 },
  { name: "Grzegorz", age: 19 },
  { name: "Halina", age: null },
  { name: "Agata", age: 24 },
  { name: "Krzysztof", age: 40 },
  { name: "Adam", age: 29 },
];

function sortPerson(persons) {
  const filteredPersons = persons.filter((person) => person.age !== null);
  filteredPersons.sort((a, b) => a.age - b.age);
  const names = [];
  filteredPersons.forEach((person) => {
    names.push(person.name);
  });

  return names;
}

console.log(sortPerson(persons));
