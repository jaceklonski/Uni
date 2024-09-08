const poKolei = (fun1, fun2, cb) => { 
    fun1(() => fun2((x) => 
        cb(x*2), 2))
 }

function fun1 (cba) {
    return setTimeout(cba,1000)
}

function fun2 (cba, a) {
    return setTimeout(() => cba(a),2000)
}

function cb(tab) {
    console.log(tab)
}

poKolei(fun1,fun2, cb)