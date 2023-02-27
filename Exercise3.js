/** *******Requirement
3. Find pairs of elements whose sum is equal to a given number
Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]
*/

/** Program */
const sum = 10;
const array = [1, 7, 9, 2, 5, 3, 8];
const pairs = {};
const result = [];
const n = array.length;
for (let i = 0; i < n; i++) {
  if (pairs[array[i]] === undefined) {
    pairs[sum - array[i]] = array[i];
  } else result.push([pairs[array[i]], array[i]]);
}
console.log(result);
