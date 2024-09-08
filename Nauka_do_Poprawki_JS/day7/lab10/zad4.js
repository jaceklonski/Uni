const welcome = () => {console.log("welcome")}

const inter = setInterval(welcome, 1000)
setTimeout(() => {clearInterval(inter)}, 5000)