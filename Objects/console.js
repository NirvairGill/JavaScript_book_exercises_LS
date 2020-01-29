

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);     // => hi
console.log(qux);       // => hello. Because primitives are immutable and we trying to reassign a new value to a primitive inside the function
                        // and to the object foo. On the other hand objects are mutable and we will end up getting mutated object value.  .     

