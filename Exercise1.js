function getDuplicate(arr1, arr2) {
    let result = [];
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr2.length; j++) {
            if (arr2[j] === arr1[i]) {
                result.push(arr2[j]);
                break;
            }
        }
    }
    return result;
}
array1 = [1,2,3,4,5,6];
array2 = [3,4,8,9,12];
console.log(getDuplicate(array1, array2));
