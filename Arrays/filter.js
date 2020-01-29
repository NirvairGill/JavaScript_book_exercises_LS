let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

//let newArray = removeNonInteger(array);
//console.log(newArray); // => [1, 3, -4]
 

let funcInteger = arr => {
  let newArray = arr.filter(num => {
    return Number.isInteger(num);
  }); console.log(newArray);

}

funcInteger(array);