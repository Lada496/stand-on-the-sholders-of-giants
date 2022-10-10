function addTo80(n) {
  return n + 80;
}
let cache = {};

function memorizedAddTo80(n) {
  if (cache.n) {
    return cache[n];
  } else {
    cache[n] = n + 80;
  }
}

memorizedAddTo80(5);
memorizedAddTo80(5); // just return cached value
