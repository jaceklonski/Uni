function unequal(a, b, c) {
  if (typeof a == typeof b || a === b) {
    return false;
  }
  if (typeof b == typeof c || b === c) {
    return false;
  }
  if (typeof a == typeof c || a === c) {
    return false;
  } else {
    return true;
  }
}

unequal(1, 2, 3);
unequal(1, 1, 2);
