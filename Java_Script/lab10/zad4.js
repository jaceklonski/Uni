function Welcome() {
  console.log("Welcome");
}

let a = setInterval(Welcome, 1000);

setTimeout(() => {
  clearInterval(a);
}, 5000);
