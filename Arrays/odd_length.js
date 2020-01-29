let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// Using filter method only:

let newArr = arr.filter(str => {
  if (str.length % 2 !== 0) {
    return str;
  }
})
console.log(newArr);

// using map and filter
let oddLengths = val => {
  let arrLength = val.map(str => (str.length));

 let filterOdds =  arrLength.filter(num => (num % 2 !== 0)) 
 return filterOdds;
}


/* LS way:
let oddLengths = val => {
 let filteredArray = val.map(str => {
    return str.length;
  }).filter(num => {
    return (num % 2 === 1)
  })
 return filteredArray;
};
*/

console.log(oddLengths(arr));

