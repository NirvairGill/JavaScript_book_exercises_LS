/* Use the times function shown below to write a program that logs the value of 1! (one factorial), 2! (two factorial), 3!, 4!, and 5! (five factorial) to the console.

n!	Expansion	Result
1!	1	1
2!	1 * 2	2
3!	1 * 2 * 3	6
4!	1 * 2 * 3 * 4	24
5!	1 * 2 * 3 * 4 * 5	120 */

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let factorial1 = times(1,1);
let factorial2 = times(2, factorial1);
let factorial3 = times(3, factorial2);
let factorial4 = times(4, factorial3);
let factorial5 = times(5, factorial4);  // Sorry, I had to take a peak into the solution.