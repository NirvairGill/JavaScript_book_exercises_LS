
let readlineSync = require('readline-sync');
let age = readlineSync.question(`How old are you? `)
age = Number(age);
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} yeras old.`);
console.log(`In 20 years, you will be ${age + 20} yeras old.`);
console.log(`In 30 years, you will be ${age + 30} yeras old.`);
console.log(`In 40 years, you will be ${age + 40} yeras old.`);