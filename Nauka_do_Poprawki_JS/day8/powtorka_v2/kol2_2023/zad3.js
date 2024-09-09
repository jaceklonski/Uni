// Napisz funkcję


const zliczPoKolei = (funTab, threshold, cb) => {
    let powyzej = 0

    const zlicz = (a) => {
        if (a < funTab.length){
        funTab[a]((b) => {
            if(b > threshold) powyzej++
            zlicz(a+1)
        })}
        else cb(powyzej)
    }

    zlicz(0)
};


// taką, że:
// • pierwszym argumentem jest tablica funkcji asynchronicznych zwracających
// liczbę
// • drugim argumentem jest threshold – wartość graniczna (sprawdzamy, czy
// wyniki funkcji są większe niż podana wartość)
// • funkcja zliczPoKolei powinna zapewnić, że kolejne funkcje w tablicy
// funTab będą wykonywać się po zakończeniu poprzedniej funkcji (tj. funkcja
// druga wykona się po zakończeniu funkcji pierwszej, funkcja trzecia po
// zakończeniu funkcji drugiej, itd.)
// • funkcja zliczPoKolei powinna policzyć, ile było funkcji, których wynik był
// większy niż threshold i przekazać go do funkcji cb („callback”)
// • trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest
// wyświetlenie liczby funkcji, których wynik był większy niż threshold

const tab1 = [
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),
    (cb) => setTimeout(() => cb(2), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(2), Math.random() * 1000),
    (cb) => setTimeout(() => cb(1), Math.random() * 1000)
]

zliczPoKolei(tab1, 1, (x) => {console.log(x)})