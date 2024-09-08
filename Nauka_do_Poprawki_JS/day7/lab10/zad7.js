function countdown(sek, cb) {
    console.log(sek)
    const a = setInterval(() => {console.log(sek-1)
        sek--
    }, 1000)
    setTimeout(() => {clearInterval(a)
        setTimeout(cb, 1000)
    }, sek*1000)}

countdown(10 ,() => console.log("koniec"))