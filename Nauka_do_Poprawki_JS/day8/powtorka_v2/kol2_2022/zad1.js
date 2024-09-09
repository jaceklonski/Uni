// Napisz funkcje result spełniającą poniższe warunki:
// • dwoma pierwszymi argumentami funkcji są tablice funkcji
// asynchronicznych, których rezultatem są wartości liczbowe
// • trzecim argumentem jest funkcja func przetwarzające wyniki kolejnych
// funkcji z tablic funTab1 i funTab2
// • jeżeli tablice nie są równe, to przyjmujemy, że brakująca wartość wynosi 0.

const process = (wyn1, wyn2) => {
    return wyn1 + wyn2
    };
    const result = (funTab1, funTab2, func) => {
        const r = []
        Promise.all([
            Promise.all(
                funTab1.map(
                    fn => new Promise(resolve => fn(resolve))
                )
            ),
             
            Promise.all(
                funTab2.map(
                    fn => new Promise(resolve => fn(resolve))
                )
            )
        ]).then(
            res => {
                if (res[1].length < res[0].length){
                    res[0].map(
                        (elem, index) => {
                            r.push(func(elem, res[1][index] ? res[1][index] : 0))
                        }
                    )
                    console.log(r)
                }
                
                else{
                    res[1].map(
                        (elem, index) => {
                            r.push(func(res[0][index] ? res[0][index] : 0, elem))
                            }
                    )
                    console.log(r)}
            }
        )
    }


// [
// wynik_funkcji_func(
// wynik_funkcji_1_z_funTab1,
// wynik_funkcji_1_z_funTab2
// ),
// wynik_funkcji_func(
// wynik_funkcji_2_z_funTab1,
// wynik_funkcji_2_z_funTab2
// ),
// wynik_funkcji_func(
// wynik_funkcji_3_z_funTab1,
// wynik_funkcji_3_z_funTab2
// ),
// // ...
// ];

const tab1 = [
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),
    (cb) => setTimeout(() => cb(1), Math.random() * 1000)
]


const tab2 = [
    (cb) => setTimeout(() => cb(2), Math.random() * 1000),
    (cb) => setTimeout(() => cb(2), Math.random() * 1000),
    (cb) => setTimeout(() => cb(2), Math.random() * 1000),
    (cb) => setTimeout(() => cb(2), Math.random() * 1000),
    (cb) => setTimeout(() => cb(2), Math.random() * 1000),
]

result(tab1, tab2, process);