function multiplyAsync(x, y) {
  const Promisik = new Promise((resolve, reject) => {
    if (typeof x === "number" && typeof y === "number") {
      resolve(x * y);
    } else {
      reject("Porażka");
    }
  });

  return Promisik;
}

multiplyAsync(7, 8)
  .then((value) => console.log(value))
  .catch((value) => console.log(value));

multiplyAsync("a", 8)
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
