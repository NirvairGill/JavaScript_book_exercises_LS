// Take a look at this code snippet:

let foo = 'bar';
{
 let foo = 'qux';
}

console.log(foo); /* => bar: We have declared variable outside the block and we are trying to declare the value inside the block again.
                        since we are trying to access the block outside the block. So, it will display the value which is outside the block. */