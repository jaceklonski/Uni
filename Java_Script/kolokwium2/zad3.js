const axios = require("axios");

axios.get("http://jsonplaceholder.typicode.com/users").then((x) => {
  //     const dawe = x.data.reduce((acc, elem) => {acc.push({elem[0].name, elem[1].company})} , [])
  //   console.log(dawe);
  // const maks = Math.max{}

  const cos = x.data.reduce((acc, elem) => {
    const { a, b } = elem
    acc.push({a.name, b.catch.split("").length})
    return acc
  }
)



  x.data.reduce((elem) => (elem = { a, b }));

  console.log(cos)
});
