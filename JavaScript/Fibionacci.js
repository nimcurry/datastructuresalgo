function memomize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const results = fn.apply(this, args);
    cache[args] = results;

    return results;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
  //console.log(fib(n - 1) + fib(n - 2));
}
const fib = memomize(slowFib);
module.exports = fib;

var x = fib(8);
console.log(x);
// 0,1,1,2,3,5,8,13

/* function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    console.log(`i:${i},a: ${a}`);
    const b = result[i - 2];
    console.log(`b: ${b}`);
    result.push(a + b);
  }

  console.log(result[n]);
} */
