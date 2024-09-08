const grupuj = (funTab1, funTab2, cb) => { 
    const tab = []
    Promise.all([
        Promise.all(funTab1.map(fn => new Promise(resolve => fn(resolve)))), 
        Promise.all(funTab2.map(fn => new Promise(resolve => fn(resolve))))
    ]).then((res) => {
        const rownaj = (res) => {
            if (res[1].length === res[0].length){
                cb(res.reduce((acc,element) => {
                    element.map((elem, i) => {
                    if (!acc[i]) acc[i] = []
                    acc[i].push(elem)
                })
                    return acc
                }, []))
            }
            if (res[0].length > res[1].length) {res[1].push(0)
                rownaj(res)
            }
            if (res[1].length > res[0].length) {res[0].push(0)
                rownaj(res)
            }
        } 

        rownaj(res)
    });
};


const funTab1 = [
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000)
]


const funTab2 = [
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
]

grupuj(funTab1, funTab2, (x) => console.log(x))