const persons = [
    { id: 1, firstName: 'Adam', lastName: 'Nowak' },
    { id: 2, firstName: 'Kamil', lastName: 'Kowalski' },
    { id: 3, firstName: 'Anna', lastName: 'Mazur' },
    { id: 4, firstName: 'Katarzyna', lastName: 'Maj' },
    { id: 5, firstName: 'Jakub', lastName: 'Adamski' }
  ]

  console.log(persons.map(({id, firstName, lastName}) => {return {label: firstName.concat(" ", lastName), value: { id: id, firstName: firstName, lastName: lastName}}}))