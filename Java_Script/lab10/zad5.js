function Welcome() {
  console.log("Welcome");
}

function cos(a, b, c) {
  let interval = setInterval(a, b);

  setTimeout(() => {
    clearInterval(interval);
  }, c);
}

cos(Welcome, 1000, 5000);
