let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upperCaseKeys = (Object.keys(obj)).map(key => key.toUpperCase());
console.log(upperCaseKeys);