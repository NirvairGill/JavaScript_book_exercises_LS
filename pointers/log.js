let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);  // It will log [1,4,3] to the console because we've mutated the Array on Line 3. The mutation of the value results in changing the original value.
//Since both variables are pointing to the the same value.