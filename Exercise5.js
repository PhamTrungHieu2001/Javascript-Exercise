const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
// remove all duplicates in each array
const remove1 = arr1.filter((element, index) => arr1.indexOf(element) == index);
const remove2 = arr2.filter((element, index) => arr2.indexOf(element) == index);
// find duplicates
function getDuplicate(arr1, arr2) {
    const result = [];
    for (let i=0; i<arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }           
    }
    return result;
}
console.log(getDuplicate(remove1, remove2));
