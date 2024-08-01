const funkcja_promise = (func) => {
  func.then((x) => {
    console.log(x);
  });
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

funkcja_promise(promises[0]);
funkcja_promise(promises[1]);
funkcja_promise(promises[2]);
