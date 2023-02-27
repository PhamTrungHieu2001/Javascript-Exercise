/**Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;	

Example: 	array1 = [1,2,3,4,5,6];
			array2 = [3,4,8,9,12];
			=> [3,4] 
*/
/** Program */
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [3, 4, 8, 9, 12];
const duplicates = [];
const uniqueElements = {};
function getDuplicate(array1, array2) {
  array1.forEach((item) => {
    if (!uniqueElements[item]) {
      uniqueElements[item] = true;
    }
  });
  array2.forEach((item) => {
    if (uniqueElements[item]) {
      duplicates.push(item);
    }
  });
  return duplicates;
}
console.log(getDuplicate(array1, array2));
