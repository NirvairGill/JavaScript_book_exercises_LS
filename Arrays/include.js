 let numbers1 = [1, 3, 5, 7, 9, 11];
 let numbers2 = [];
 let numbers3 = [2, 4, 6, 8];

let findNumber = (arr, num) => {
  console.log(arr.includes(num));
}

findNumber(numbers1, 3);
findNumber(numbers2, 3);
findNumber(numbers3, 3);