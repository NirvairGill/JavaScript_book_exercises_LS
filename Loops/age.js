let readlineSync = require('readline-sync');
let age = readlineSync.question(`How old are you? `)
age = Number(age);
/* Another way or my way
for (let i = 0 ; i <= 40; i += 10){
  if (i === 0) {
    console.log(`You are ${age} years old. `);
  } else {
    console.log(`In ${i} years, you will be ${age + i} yeras old.`);
 };
 
 
 } 
*/
age = parseInt(age);
console.log(`You are ${age} years old. `);
for (i = 10; i <= 40; i += 10){
console.log(`In ${i} years, you will be ${age + i} yeras old.`);
}