const Promisik = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Udało się!");
  }, 5000);
});

Promisik.then((value) => {
  console.log(value);
});
