function counter(a,b) {
    return () => {
        const f = a
        const c = setInterval(() => {console.log(a++ - f + 1)
        }, b*1000)
        setTimeout(() => clearInterval(c), a*1000 + 1000)
    }
}

counter(5,1)()