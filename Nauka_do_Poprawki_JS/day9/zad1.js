const process = (wyn1, wyn2) => {
     return wyn1 + wyn2
    };
    const result = (funTab1, funTab2, func) => {
    Promise.all([
        Promise.all(funTab1.map(fn => new Promise(resolve => fn(resolve)))),
        Promise.all(funTab2.map(fn => new Promise(resolve => fn(resolve))))
    ]).then(res => 
        {
        if (res[0].length > res[1].length){
            res[0].map((a, i) => {
                console.log(func(a, res[1][i] ? res[1][i] : 0))})
        }

        else{
            res[1].map((a, i) => {
                console.log(func(res[0][i] ? res[0][i] : 0, a))})
        }
    }
)
    };


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