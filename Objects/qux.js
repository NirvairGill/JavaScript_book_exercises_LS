let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;


Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

for (key in myObj) {
  console.log(key);
}

// No, First snippet will output only own properties of myObj while second snippet will output all the keys including inherited ones.