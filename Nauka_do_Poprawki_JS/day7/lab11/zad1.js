const razem = (fun1, fun2, cb) => {
    let tab = []
    let completed = 0

    const a = () => {
        fun1(result => {
            tab[0] = result
            completed++
            if (completed === 2) {
                cb(tab)
            }
        })
    }

    const b = () => {
        fun2(result => {
            tab[1] = result
            completed++
            if (completed === 2) {
                cb(tab)
            }
        })
    }
    a()
    b()

}

function fun1 (cba) {
    return setTimeout(() => {return cba(4)},1000)
}

function fun2 (cba) {
    return setTimeout(() => {return cba(4)},4000)
}

function cb(tab) {
    console.log(tab[0] + tab[1])
}

razem(fun1,fun2,cb)