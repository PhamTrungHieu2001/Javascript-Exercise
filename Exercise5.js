/** *******Requirement
5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
Example: 	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
			const arr2 = [3, 5, 9, 10, 88];
			=> [3,5,9]
*/

/** Program */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
const map = {};
const result = [];
for (let i = 0; i < arr1.length; i++) {
  if (map[arr1[i]] === undefined) {
    map[arr1[i]] = true;
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (map[arr2[i]]) result.push(arr2[i]);
}
console.log(result);
