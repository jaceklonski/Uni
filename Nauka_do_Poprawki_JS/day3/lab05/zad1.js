const arr1 = [ 'Ala', 'Janusz', 'kot', 'pies'] // -> Janusz
const arr2 = [1, 112, 13, 18];

console.log(arr2
    .map((element) => element.toString()) // Convert each element to a string
    .reduce((acc, elem) => {
        return acc.length > elem.length ? acc : elem;
    }, "") // Initial value is an empty string
);
