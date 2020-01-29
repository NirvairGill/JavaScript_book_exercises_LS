let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

// Using map:
let newArray = myArray.map(num => {
  if(num % 2 === 0){
    return 'even';
  } else {
    return 'odd';
  }
});
console.log(newArray);


//  With for loop:
let newArray = [];
let newArrayUsingFor = (arr) => {
 for(let i = 0; i < arr.length; i += 1){
  if (arr[i] % 2 === 0) {
      newArray.push('even'); 
  } else {
    newArray.push('odd');
  }
  
  }

}
newArrayUsingFor(myArray);
console.log(newArray);
