const _ = require('lodash');

function detectChanges(original, modified) {
    const OG = 
    //Object.entries(object1).reduce((acc, [key, value]) => {
    //     acc.push([key, value]);
    //     return acc;
    // }, []); <= bez lodash tak najlepiej iterowac przez obiekt
    
    _.reduce(original, (acc, value, key) => {
        acc.push([key, value]);
        return acc;
    }, []);

    const CH = _.reduce(modified, (acc, value, key) => {
        acc.push([key, value]);
        return acc;
    }, []);

    console.log(CH.reduce((acc,prop, indx) => {if (_.isEqual(prop[0],OG[indx][0]) && _.isEqual(prop[1],OG[indx][1]))
        // prop[0] === OG[indx][0] && prop[1] === OG[indx][1])
        {return acc}
    else {acc.push(prop)
        return acc
    }}, []))

  }

  
  // Przykład 1
  
  const object11 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
  };
  
  const object12 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
  };
  
  detectChanges(object11, object12); // => [ [ 'name', 'Przyjaciele edytowany' ], [ 'endYear', 2010 ] ]
  
  // Przykład 2
  
  const object1 = {
    value: { field: "old value" },
    name: 'test'
  }
  
  const object2 = {
    value: { field: "new value" },
    name: 'test'
  }
  
  detectChanges(object1, object2); // 

// _.map(object1, (val, prop) => {[console.log(val)
//     console.log(prop)]})

const result = _.reduce(object1, (acc, value, key) => {
    acc.push([key, value]);
    return acc;
}, []);
