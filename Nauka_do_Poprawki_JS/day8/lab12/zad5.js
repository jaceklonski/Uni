const connect = (funTab, fun) => { 
    Promise.all(
        funTab.map(fn => 
            new Promise((resolve) => 
                {
                fn(result => fun(result).then(result2 => resolve([result, result2])))
                }
            )
        )
    )
    .then(results => console.log(results))
};

const funTab1 = [
    (cb) => setTimeout(() => cb(1), Math.random() * 1000),
    (cb) => setTimeout(() => cb(2), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(3), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),    
    (cb) => setTimeout(() => cb(5), Math.random() * 1000),
    (cb) => setTimeout(() => cb(6), Math.random() * 1000)
]

const fun = (cb) => new Promise (resolve => 
 {setTimeout(() => resolve(cb * 4), Math.random() * 1000)})

connect(funTab1, fun)

