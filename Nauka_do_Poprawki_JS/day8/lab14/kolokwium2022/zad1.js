// Zadanie 1.
// Napisz funkcje result spełniającą poniższe warunki:
// • dwoma pierwszymi argumentami funkcji są tablice funkcji
// asynchronicznych, których rezultatem są wartości liczbowe
// • trzecim argumentem jest funkcja func przetwarzające wyniki kolejnych
// funkcji z tablic funTab1 i funTab2
// • jeżeli tablice nie są równe, to przyjmujemy, że brakująca wartość wynosi 0.

const tab1 = [
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000)
    ]

const tab2 = [
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000)
    ]

const process = (wyn1, wyn2) => {
    const a = wyn1 + wyn2
    return a
    };
const result = (funTab1, funTab2, func) => {
    Promise.all(
        [Promise.all(
            funTab1.map((fn) => new Promise (resolve => fn(resolve)))),
        Promise.all(
            funTab2.map((fn) => new Promise (resolve => fn(resolve))))
        ])

        .then((result) => {
            if (result[0].length > result[1].length) {
                const rez = result[0].map((element, indx) => {return func(element, result[1][indx] ? result[1][indx] : 0  )})
                console.log(rez)
            }
            else {
                const rez = result[1].map((element, indx) => {return func(result[0][indx] ? result[0][indx] : 0 , element)})
                console.log(rez)
            }})
    };
    
result(tab1, tab2, process);



    // [
    //     wynik_funkcji_func(
    //     wynik_funkcji_1_z_funTab1,
    //     wynik_funkcji_1_z_funTab2
    //     ),
    //     wynik_funkcji_func(
    //     wynik_funkcji_2_z_funTab1,
    //     wynik_funkcji_2_z_funTab2
    //     ),
    //     wynik_funkcji_func(
    //     wynik_funkcji_3_z_funTab1,
    //     wynik_funkcji_3_z_funTab2
    //     ),
    //     // ...
    //     ];

