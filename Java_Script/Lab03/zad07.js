function sortWords(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortWords(["pies", "kot", "chomik", "królik", "wiewiórka"]));
