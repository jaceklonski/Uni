const hogwardArray = require("./potter.js").hogwardArray;

const resultArray = hogwardArray
  .filter((person) => person.alive)
  .reduce((prev, curr) => {
    const { house, name, hogwartsStudent, hogwartsStaff } = curr;
    const houseKey = house || "noHouse";

    const type = (function () {
      if (hogwartsStaff && !hogwartsStudent) {
        return "staf";
      }
      if (!hogwartsStaff && hogwartsStudent) {
        return "student";
      }
      return "none";
    })();

    if (!prev[houseKey]) {
      prev[houseKey] = [];
    }

    const person = { name, type };
    prev[houseKey].push(person);

    return prev;
  }, []);

console.log(resultArray);
