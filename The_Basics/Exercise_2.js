/* Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6
*/

let number = 8649

// Ones place 
let onesPlace = number % 10;
console.log(onesPlace);

// Tens place
let tensPlace = ((number % 100) - (number % 10)) / 10 ;
console.log(tensPlace);

// Hundreds place
let hundredsPlace = ((number % 1000) - (number % 100)) / 100;
console.log(hundredsPlace);

// Thousands Place
let thousandsPlace = (number - (number % 1000)) / 1000;
console.log(thousandsPlace);