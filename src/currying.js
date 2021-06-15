function add(a, b) {
  return a + b;
}

function add2(a) {
  return function(b) {
    return a + b;
  }
}

add(1, 2);
add2(1)(2); // add2(1, 2)
