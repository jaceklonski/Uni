const a = new Promise((resolve, reject) => {
    if (2 == 4) {
    setTimeout(() => resolve("Udało się!"), 5000);}
    else reject("porazka")
});

a.catch((wynik) => console.log(wynik));