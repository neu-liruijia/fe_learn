// 实现 （1+10）* 10 +10
const fn1 = (x) => x + 10;
const fn2 = (x) => x * 10;
const fn3 = (x) => x - 10;
console.log(fn3(fn2(fn1(1))));

function compose(...fns) {
  let arr = []; // 获取所有参数
  return function (args, arr) {
    if (false) {
    }
  };
}
