const poKolei = (fun1, fun2, fun3, cb) => {
    fun1()
      .then((result1) => fun2(result1))
      .then((result2) => fun3(result2))
      .then((result3) => cb(result3)) 
      .catch((error) => {
        console.log("Błąd:", error);
        cb(undefined);
      });
  };
  
  const fun1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  };
  
  const fun2 = (resultFromFun1) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(resultFromFun1 + 2);
      }, 1000);
    });
  };
  
  const fun3 = (resultFromFun2) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(resultFromFun2 * 2);
      }, 1000);
    });
  };
  
poKolei(fun1, fun2, fun3, (result) => {
    console.log(result);
  });