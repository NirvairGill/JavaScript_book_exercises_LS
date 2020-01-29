/* In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. Use the return values to greet the user with their full name. 

let readLineSync = require('readline-sync');

let fullName = (firstName, lastName) => {
  firstName = readLineSync.question("'What\'s your first name? : ");
  lastName  =  readLineSync.question("'What\'s your last name? : ");
  return `Hello, ${firstName} ${lastName}`;
};  


console.log(fullName());
*/

let fullName = prompt => {
  let readLineSync = require('readline-sync');
  let name = readLineSync.question(prompt);
  return name;
}

let firstName = fullName('What is your first name:');
let lastName = fullName('What is your last name:');
console.log(`Welcome, ${firstName} ${lastName}!`)