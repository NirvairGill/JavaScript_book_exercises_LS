let multiply = (num1, num2) => {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(num1, num2);
 return Number(number);
};

let num1 = multiply(`Enter the first no: `);
let num2 = multiply(`Enter the second no: `);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
