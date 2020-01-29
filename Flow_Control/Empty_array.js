// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// Since arr[](empty array) is truthy, it will log "Not Empty" to the console. javascript only take five data types as falsy: Empty String(''), false, NaN, Number 0,undefined 