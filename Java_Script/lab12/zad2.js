const Promisik = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Porażka");
  }, 5000);
});

Promisik.then().catch((value) => console.log(value));
