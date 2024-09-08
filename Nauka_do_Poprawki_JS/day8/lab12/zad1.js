const a = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Udało się!"), 5000);
});

const b = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Udało się! b"), 4000);
});

a.then((wynik) => console.log(wynik));
b.then((wynik) => console.log(wynik));
