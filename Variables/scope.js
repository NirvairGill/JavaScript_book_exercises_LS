// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);  // Error: foo is not defined. The variable 'foo' is defined inside the block. Variable defined inside the block are not ccessible outside the block scope.