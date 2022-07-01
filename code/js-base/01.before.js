Function.prototype.before = function (cb) {
  return (...args) => {
    cb();
    this(...args);
  };
};

function say(a,b) {
  console.log("say", a,b);
}

let breforeSay = say.before(() => {
  console.log("sdsd");
});
breforeSay("data",'b');
