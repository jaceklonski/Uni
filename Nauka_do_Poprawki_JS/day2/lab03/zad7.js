//"[...](użyj funkcji wbudowanej: sort())" :)))
function sortWords(arr) {
  function najkrotszy(arr, index) {
    const temp = arr[index + 1];
    if (index + 1 < arr.length) {
      if (arr[index].length > arr[index + 1].length) {
        arr[index + 1] = arr[index];
        arr[index] = temp;
        return najkrotszy(arr, index + 1);
      }
      if (arr[index].length == arr[index + 1].length) {
        if (!alfabetyczny(arr[index], arr[index + 1], 0)) {
          return najkrotszy(arr, index + 1);
        } else {
          arr[index + 1] = arr[index];
          arr[index] = temp;
          return najkrotszy(arr, index + 1);
        }
      } else {
        return najkrotszy(arr, index + 1);
      }
    } else {
      return arr;
    }
  }
  function alfabetyczny(slowo_a, slowo_b, index) {
    if (slowo_a[index] == slowo_b[index]) {
      alfabetyczny(slowo_a, slowo_b, index + 1);
    } else {
      if (slowo_a[index] > slowo_b[index]) return true;
      else return false;
    }
  }

  return najkrotszy(arr, 0);
}

console.log(sortWords(["pies", "kot", "chomik", "królik", "wiewiórka"]));
//=> ['kot', 'pies', 'chomik', 'królik', 'wiewiórka']
