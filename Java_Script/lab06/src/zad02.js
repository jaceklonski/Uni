const _ = require("lodash");

function detectChanges(o1, o2) {
  const changes = [];

  Object.keys(o1).forEach((key) => {
    if (!_.isEqual(o2[key], o1[key])) {
      changes.push([key, o2[key]]);
    }
  });

  console.log(changes);
  return changes;
}

const object1 = {
  id: 2,
  name: "Przyjaciele",
  startYear: 1994,
  endYear: 2004,
  type: ["Komedia"],
  seasons: 10,
};

const object2 = {
  id: 2,
  name: "Przyjaciele edytowany",
  startYear: 1994,
  endYear: 2010,
  type: ["Komedia"],
  seasons: 10,
};

detectChanges(object1, object2); // => [ [ 'name', 'Przyjaciele edytowany' ], [ 'endYear', 2010 ] ]
