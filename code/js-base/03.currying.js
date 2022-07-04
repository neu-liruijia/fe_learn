// 高阶函数
// 1. 参数是一个函数
// 2. 或者返回时一个函数

function isType(type, value) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}
function isString(value) {
  return isType("String", value);
}
let flag = isString('121');
console.log("flag", flag);

function currying(fn) {
  let len = fn.length; // 参数的长度
  return
}
