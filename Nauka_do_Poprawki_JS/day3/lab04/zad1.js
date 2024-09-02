const arr = [10, 'a', 21, true, null, undefined, 1, false, 'b', 2];

const isnone = (element) => element == null
console.log(arr.some(isnone))

const jeststr = (element) => {if(typeof element === "string"){return element} else {return false}}
console.log(arr.find(jeststr))

const index = (element) => {if (element == true) return element}
console.log(arr.findIndex(index))

console.log(arr.filter((element) => {if (typeof element === "number"){return element}}).sort((a,b) => {return a - b}))