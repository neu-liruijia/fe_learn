// 实现 （1+10）* 10 +10
const fn1 = (x) => x + 10;
const fn2 = (x) => x * 10;
const fn3 = (x) => x - 10;
console.log(fn3(fn2(fn1(1)))); // 100

function compose(...fns) {
  return fns.reduce((a, b) => {
    return (...args) => {
      return a(b(...args))
    };
  });
}
var a = compose(fn3, fn2, fn1)(1);
console.log("a", a);
