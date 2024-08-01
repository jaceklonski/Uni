const zadanie2 = (funcTab, cb) => {
  let czas = 0;
  let param = 0;
  let ukonczone = 0;

  function welcomeForever() {
    interval = setInterval(() => {
      czas++;
    }, 10);
  }

  const pseudopetla = (n) => {
    if (n < funcTab.length) {
      wykonaj(n);
      pseudopetla(n + 1);
    }
  };

  const wykonaj = (n) => {
    funcTab[n].then(() => {
      if (czas <= 100) {
        param++;
      }
      ukonczone++;
      if (ukonczone == funcTab.length) {
        cb(param);
        return;
      }
    });
  };

  welcomeForever();
  pseudopetla(0);
};

const promises = [
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 100);
  }),
];

const cb = (x) => {
  console.log(x);
};

zadanie2(promises, cb);
