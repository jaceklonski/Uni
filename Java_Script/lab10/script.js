let i = 0;
let a;
function start() {
  a = setInterval(() => {
    document.getElementById("demo").innerHTML = i++;
  }, 1000);
}

function stop() {
  clearInterval(a);
}

function clear() {
  i = 0;
  document.getElementById("demo").innerHTML = i;
}
