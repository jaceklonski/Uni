const games = require('./series.js').series;
;const _ = require('lodash');

// miniseries będzie tablicą zawierającą tylko miniseriale (jednosezonowe), posortowane
// alfabetycznie. Każdy z miniseriali powinien zawierać wyłącznie name, year i type. (Miniseriale rok
// rozpoczęcia i zakończenia mają taki sam

function miniseriale(lista){
    console.log((lista.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }))
      .reduce((acc, elem) => {
        if (elem.seasons == 1 || elem.startYear == elem.endYear) {
            const {name : name, startYear: year, type: type } = elem
            acc.push({name, year, type})
            return acc
        }
        else {return acc}
      },[]))
} 

miniseriale(games)

function lodash_miniserie(lista) {
    console.log(
        _.chain(lista)
        .filter(elem => elem.seasons == 1)
        .sortBy('name')
        .map((elem) => _.pick(elem,['name', 'startYear', 'type']))
        .value()
    )
}

lodash_miniserie(games)

// series będzie trzyelementową tablicą tablic zawierającą seriale (bez miniseriali), gdzie:
// • pierwsza tablica będzie zawierała seriale rozpoczęte przed rokiem 2010
// • druga tablica będzie zawierała seriale rozpocząte między 2010 (włącznie) a 2020 rokiem
// • trzecia tablica będzie zawierała tablice rozpoczęte po 2020 (włącznie)

function series(list){
    console.log(list.reduce((acc, elem) => {
        const {type: type} = elem
        elem.type = type.reduce((acc, elem2) => {return acc + ' ' + elem2 + ','}, '')

        if(elem.startYear != elem.endYear){
            if (elem.startYear < 2010) {
                if(!acc[0]){acc[0] = []}

                acc[0].push(elem)
                return acc
            }
            if (elem.startYear >= 2010 && elem.startYear < 2020) {
                if(!acc[1]){acc[1] = []}

                acc[1].push(elem)
                return acc
            }
            if (elem.startYear >= 2020) {
                if(!acc[2]){acc[2] = []}

                acc[2].push(elem)
                return acc
            }
        }
        return acc
    }, [])
    .map((elem) => {return elem.sort((a,b) => {if (a.startYear != b.startYear) {return a.startYear-b.startYear}
    if (a.startYear == b.startYear){return a.endYear - b.endYear}
})})
)
}

series(games)