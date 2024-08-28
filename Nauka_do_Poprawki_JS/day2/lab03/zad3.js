function toArray(element_a, element_b) {
  if (Array.isArray(element_a) && !Array.isArray(element_b)) {
    element_a[element_a.length] = element_b;
    return element_a;
  }
  if (Array.isArray(element_b) && !Array.isArray(element_a)) {
    const temp = element_b;
    element_b[0] = element_a;
    element_b[element_b.length] = temp[0];

    return element_b;
  }

  if (Array.isArray(element_a) && Array.isArray(element_b)) {
    return element_a.concat(element_b);
  } else return [element_a, element_b];
}

console.log(toArray(1, 2)); //=> [1, 2]
console.log(toArray(1, "tekst")); //=> [1, "tekst"]
console.log(toArray("aa", [1, 2])); //=> ["aa", 1, 2]
console.log(toArray([1], null)); //=> [1, null]
