/** *******Requirement
4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
*/

/** Program */
// With Set
const array = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
const remove = [...new Set(array)];

// Without Set
const result = [];
const map = {};
for (let i = 0; i < array.length; i++) {
  if (map[array[i]] === undefined) {
    result.push(array[i]);
    map[array[i]] = true;
  }
}
console.log(result);
