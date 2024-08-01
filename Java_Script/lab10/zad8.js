function counter(a, b) {
  (function () {
    console.log(1);
    let i = 2;
    let inter = setInterval(() => {
      console.log(i);
      i++;
    }, b);

    setTimeout(() => {
      clearInterval(inter);
    }, b * a);
  })();
}

counter(8, 100);
