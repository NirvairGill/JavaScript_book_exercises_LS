// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);  /* => bar: Since variables declaration has been done outside the block. So, it does not matter if you try to change the code inside or not. 
                         we are logging from outside. we willl get bar as output.*/