/** *******Requirement
2. Find 2 elements with the greatest sum in an array
Example: [1,7,9,2,5,3,8] => [9,8] 
*/

/** Program */
const array = [1, 7, 9, 2, 5, 3, 8];
const n = array.length;
array.sort((a, b) => a - b);
console.log([array[n - 1], array[n - 2]]);
