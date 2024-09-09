// W pliku series.js znajduje się lista seriali. Wykorzystując jedynie programowanie funkcyjne i funkcje
// wbudowane takie jak: reduce, sort, filter i push stwórz dwa obiekty miniseries i series, gdzie:
// 1. miniseries będzie tablicą zawierającą tylko miniseriale (jednosezonowe), posortowane
// alfabetycznie. Każdy z miniseriali powinien zawierać wyłącznie name, year i type. (Miniseriale rok
// rozpoczęcia i zakończenia mają taki sam)
// 2. series będzie trzyelementową tablicą tablic zawierającą seriale (bez miniseriali), gdzie:
// • pierwsza tablica będzie zawierała seriale rozpoczęte przed rokiem 2010
// • druga tablica będzie zawierała seriale rozpocząte między 2010 (włącznie) a 2020 rokiem
// • trzecia tablica będzie zawierała tablice rozpoczęte po 2020 (włącznie)
// Dodatkowo:
// • Seriale powinny być posortowane latami, od najstarszego tzn. wg roku rozpoczęcia, a następnie wg.
// roku zakończenia (jeśli serial nie ma roku zakończenia, to powinien wyświetlić się przed serialami,
// które rok zakończenia mają).
// • Gatunek powinien być zapisany jako string, nie jako tablica stringów:
// ["Dramat", "Wojenny"] => "Dramat, Wojenny"
// Między kolejnymi gatunkami, po przecinku znajduje się spacja.
// • Jeżeli serial nie ma roku zakończenia, to nie wyświetlamy go (tj. roku zakończenia) w obiekcie.

const seriale = require("./series(1)").series

function miniseries(tab) {
    console.log(tab.reduce((acc, elem) => {
        if (elem.starYear == elem.endYear || elem.seasons == 1) {
            const {name : name, type: type, startYear: year} = elem
            acc.push({name: name , type: type , year: year})
            return acc
        }
        else return acc
    }, []
    ).sort((a,b) => {if(a > b) return 1
        if (b > a) return -1
        if (a == b) return 0
    }))
}

miniseries(seriale)

function series(tab){
    console.log(
        tab.reduce(
        (acc, elem) => {
            if (elem.startYear != elem.endYear && elem.seasons != 1){
                if (elem.startYear < 2010){
                    if(!acc[0]) acc[0] = []

                    const{type: type, ...rest} = elem
                    const type_str = 
                        type.reduce(
                            (acc, elem) => {return acc + " " + elem + ","}, ""
                        )

                    acc[0].push({type: type_str, ...rest})
                    return acc
                }
                if (elem.startYear >= 2010 && elem.startYear < 2020){
                    if(!acc[1]) acc[1] = []

                    const{type: type, ...rest} = elem
                    const type_str = type.reduce((acc, elem) => {return acc + " " + elem + ","}, "")

                    acc[1].push({type : type_str, ...rest})
                    return acc
                }
                if (elem.startYear >= 2020){
                    if(!acc[2]) acc[2] = []

                    const{type: type, ...rest} = elem
                    const type_str = type.reduce((acc, elem) => {return acc + " " + elem + ","}, "")

                    acc[2].push({type: type_str, ...rest})
                    return acc
                }
            }
            else return acc
        }, []
        ).map(a => a.sort((a, b) => {
            if (a.startYear > b.startYear) return 1
            if (a.startYear < b.startYear) return -1
            if (a.startYear = b.startYear) {
                return a.endYear - b.endYear 
            }
        }))
    )
}





series(seriale)







// // Output miniseries
// [
// { name: "Czarnobyl", type: "Dramat", year: 2019 },
// { name: "Gambit królowej", type: "Dramat", year: 2020 },
// { name: "Kompania braci", type: "Dramat, Wojenny", year: 2001 },
// { name: "Pacyfik", type: "Dramat, Wojenny", year: 2010 },
// ];
// // Output series
// [
// [ ... ],
// [
// // ...
// {
// id: 14,
// name: "Rick i Morty",
// startYear: 2013,
// type: "Komedia, Przygodowy, Sci-Fi, Animacja dla dorosłych",
// seasons: 9,
// },
// {
// id: 11,
// name: "House of Cards",
// startYear: 2013,
// endYear: 2018,
// type: "Dramat, Polityczny",
// seasons: 6,
// },
// // ...
// ],
// [ ... ],
// ];