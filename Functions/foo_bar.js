// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);    /* This will log the value 1. No, It won't affect the output. 
                        We are trying to define variable inside the function scope. Variables
defined inside the scope(local variables won't effect ouside varibles.)*/