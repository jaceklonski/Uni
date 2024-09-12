const _ = require("lodash")

function detectChanges(original, modified) {
    const og = Object.entries(original)
    const mod = Object.entries(modified)
    
    console.log(
        mod.reduce(
            (a,e,i) => {
                if (!_.isEqual(e[0],og[i][0]) || !_.isEqual(e[1],og[i][1])) a.push(b)
                return a
            },[]
        )
    )
}

    // Przykład 1
    const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
    };
    const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
    };

    detectChanges(object1, object2);