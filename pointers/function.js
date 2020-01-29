function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}


// It will output the array of number of letters in each word of the given String after reversing it(from last word to first).
console.log(doSomething('leslie Suvillan team'));