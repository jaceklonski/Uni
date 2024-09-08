function a(func, x, y){
    const b = setInterval(func, x*1000)
    setTimeout(() => clearInterval(b), y*1000)
}

a(() => console.log('a'),1,4)