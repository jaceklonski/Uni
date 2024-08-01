function Welcome() {
  console.log("Welcome");
}

function ExecuteAfterDelay(funkcja, sec) {
  setTimeout(() => {
    funkcja();
  }, sec);
}

ExecuteAfterDelay(Welcome, 2000);
