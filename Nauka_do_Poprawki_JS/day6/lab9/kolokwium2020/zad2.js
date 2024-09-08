const _ = require('lodash');

function detectChanges(obj1, obj2){
    const og = _.reduce(obj1, (acc, key, value) => {
            acc.push([key, value])
            return acc
        }, [])

        // console.log(og)

    const edit = _.reduce(obj2, (acc, key, value) => {
            acc.push([key, value])
            return acc
        }, [])

        // console.log(edit)
  
    return edit.reduce((acc, elem, index) => {
        if (!_.isEqual(elem[0], og[index][0]) || !_.isEqual(elem[1], og[index][1]))
            {
                acc.push(elem)
                return acc
            }
        else {return acc}
    }, [] )

}

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
    console.log(detectChanges(object1, object2));