/** *******Requirement
6. Given an array arr1. Write a function that returns a new array of elements that appear more than once in arr1. The elements in new array can only appear once in this array.
Example: 	const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
		const myFunc = (inputArr) => {
			// write your code here
		}
		const arr2 = myFunc(arr1); // [2,3,1,5]
*/

/** Program */
const arr1 = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];
const myFunc = (inputArr) => {
  const map = {};
  const result = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (map[inputArr[i]] === undefined) {
      map[inputArr[i]] = 1;
    } else {
      if (!result.includes(inputArr[i])) {
        result.push(inputArr[i]);
      }
    }
  }
  return result;
};
const arr2 = myFunc(arr1); // [2,3,1,5]
console.log(arr2);
