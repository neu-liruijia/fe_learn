let a = "win";
let p = {
  a: "1212",
  test() {
    return new Promise(function (resolve, reject) {
      resolve(1);
    });
  },
};

p.test().then(function a(res) {
    console.log(this.a);
})