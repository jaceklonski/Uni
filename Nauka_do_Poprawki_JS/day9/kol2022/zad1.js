const seriale = require("./series(1).js").series

function miniseries(tab){
    console.log(
        tab.reduce(
            (a,b) => {
                if (b.startYear === b.endYear || b.seasons === 1){
                    a.push({name : b.name, type: b.type, year: b.startYear})
                }

                return a
            }, []
        )
    )
}

miniseries(seriale)

function series(tab){
    console.log(
        tab.reduce(
            (a,b) => {
                if (b.startYear != b.endYear){
                    if (b.startYear < 2010) {
                        if (!a[0]) a[0] = []
                        
                        const{type: type, ...rest} = b

                        const n = type.reduce(
                            (a,b) => {
                                return a + ', ' + b
                            }, ''
                        )

                        a[0].push({type: n, ...rest})
                    }

                    if (b.startYear >= 2010 && b.startYear < 2020 ) {
                        if (!a[1]) a[1] = []
                        
                        const{type: type, ...rest} = b

                        const n = type.reduce(
                            (a,b) => {
                                return a + ' ' + b +','
                            }, ''
                        )

                        a[1].push({type: n, ...rest})
                    }

                    if (b.startYear >= 2020) {
                        if (!a[2]) a[2] = []
                        
                        const{type: type, ...rest} = b

                        const n = type.reduce(
                            (a,b) => {
                                return a + ', ' + b
                            }, ''
                        )

                        a[2].push({type: n, ...rest})
                    }
                }

                return a
            }, []
        ).map(
            (x) => {
                return x.sort(
                    (a,b) => {
                        if(a.startYear > b.startYear) return 1
                        if(a.startYear < b.startYear) return -1
                        else{
                            if(a.endYear > b.endYear) return 1
                            if(a.endYear < b.endYear) return -1
                            else return 0
                        }
                    }
                )
            }
        )
    )
}

series(seriale)