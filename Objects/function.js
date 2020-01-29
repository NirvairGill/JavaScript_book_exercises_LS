let copyObj = (objName, arr) => {
 let copiedObj = {}
 if (arr) {
   arr.forEach(key => {

  copiedObj[key] = objName[key]});
   
 } else {
   copiedObj = Object.create(objName);
 }
return copiedObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
};


let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, ['foo']);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined