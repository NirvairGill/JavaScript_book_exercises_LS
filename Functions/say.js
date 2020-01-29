let add = (a,b) => a + b;
let getNumber = text => {
  let input = prompt(text);
  return Number(text);
};

let num1 = getNumber('Enter 1 no: ');
let num2 = getNumber('Enter 2 no: ');
console.log(add(num1 , num2));