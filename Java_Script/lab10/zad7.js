function Welcome() {
  console.log("Happy new Year! >.<");
}

function Countdown(func, timer) {
  console.log(timer);
  i = timer - 1;
  let interval = setInterval(() => {
    console.log(i);
    i--;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, timer * 1000);

  setTimeout(func, timer * 1000);
}

Countdown(Welcome, 10);
