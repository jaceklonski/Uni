const zliczPoKolei = (funTab, threshold, cb) => {
    let wyniki = 0
    const pomoc = (a) => {
        if (funTab.length <= a){cb(wyniki)}
        else {
        funTab[a]((b) => {
            if (b > threshold) wyniki++
            pomoc(a+1)
        })}
    }
    pomoc(0)
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
    // Uwaga! Aby końcowe rozwiązanie było kompletne, powinno zawierać wszystkie
    // elementy potrzebne do wywołania funkcji oraz jej przykładowe wywołanie

const tab1 = [
        (cb) => setTimeout(() => cb(4), Math.random() * 1000),
        (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
        (cb) => setTimeout(() => cb(5), Math.random() * 1000),
        (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
        (cb) => setTimeout(() => cb(5), Math.random() * 1000),
        (cb) => setTimeout(() => cb(4), Math.random() * 1000)
        ]

zliczPoKolei(tab1, 4, (a) => {console.log(a)})