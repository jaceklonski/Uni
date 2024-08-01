const ships = require("./ships.js").shipsArray;

const keycrew = ships.reduce((acc, ship) => {
  ship.crew.forEach((crewMember) => {
    if (!acc[crewMember]) {
      acc[crewMember] = [];
    }

    acc[crewMember].push({
      model: ship.model,
      manufacturer: ship.manufacturer,
    });
  });
  return acc;
}, []);

const formattedOutput = Object.entries(keycrew).reduce(
  (output, [crewMember, ships]) => {
    output += `${crewMember}\n`;
    output += ships.reduce((shipOutput, ship, index) => {
      shipOutput += `${index + 1}. ${ship.model}, manufacturer: ${
        ship.manufacturer
      }\n`;
      return shipOutput;
    }, "");
    output += `\n`;
    return output;
  },
  ""
);

console.log(formattedOutput);

// console.log(printstr(keycrew));

// // Oczekiwany output
// Han Solo
// 1. Millenium Falcon, manufacturer: Corellian Engineering
// 2. A-Wing, manufacturer: Kuat Systems Engineering
// 3. Tantive IV, manufacturer: Corellian Engineering Corporation

// Chewbacca
// 1. Millenium Falcon, manufacturer: Corellian Engineering

// Luke Skywalker
// 1. Millenium Falcon, manufacturer: Corellian Engineering
// 2. X-Wing, manufacturer: Incom Corporation

// Darth Vader
// 1. Tie Fighter, manufacturer: Sienar Fleet Systems
// 2. Executor Star Dreadnought, manufacturer: Kuat Drive Yards
// 3. Victory Star Destroyer, manufacturer: Sienar Fleet Systems
// 4. Lambda class T-4a shuttle, manufacturer: Sienar Fleet Systems

// // ...
