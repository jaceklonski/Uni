const razemTab = (funTab, cb) => {
    const tab = []
    const len = funTab.length
    let completed = 0
    const fire = (inx) => {
        if (inx > 0)
        {funTab[inx - 1]((x) => 
            {   tab[inx - 1] = x
                completed ++
                if (completed === len){
                    cb(tab)
                }
                else {fire(inx - 1)}
            })

        }
    }

    fire(len)
};

const funTab = [
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000),
    (cb) => setTimeout(() => cb(4), Math.random() * 1000)
]

function cb (a) {console.log(a)}

razemTab(funTab, cb)