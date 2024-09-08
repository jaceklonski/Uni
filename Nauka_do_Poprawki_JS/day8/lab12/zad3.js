function multiplyAsync(x,y) {
    const a = new Promise ((resolve, reject) => {
        if (typeof x == 'number' && typeof y == 'number'){
        resolve(x*y)}
        else reject("porazka")})

    a.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}


multiplyAsync('a', 10)
multiplyAsync(10, 11)