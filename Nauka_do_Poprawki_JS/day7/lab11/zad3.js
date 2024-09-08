const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
const getNum = (cb) => {
    setTimeout(() => {
      cb(getRand());
    }, getRand() * 5);
  };

const asyncSort = (dim, completed) => {
    const tab = []
    const loop = (iter) => 
        {if (iter > 0){
        iter--
        getNum((a) => 
            {tab.push(a)
            completed++
            if (completed === dim)
                {console.log(tab.sort((a,b) => a - b))
                }
            }
        )
    loop(iter)}
        }

    loop(dim)
};

asyncSort(10,0)