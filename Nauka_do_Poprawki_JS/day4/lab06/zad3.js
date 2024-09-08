const arr = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];

function srednia(tab, zmienna) {
    console.log(tab.map((element) => Object.entries(element)).reduce((acc, elem) => {acc.push(elem[0])
        acc.push(elem[1])
            return acc}, []).reduce((acc, [key, value]) => {if (key === zmienna) {return acc + value}
        else return acc}, 0)/tab.length)
}

srednia(arr, 'x')