const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
const myFunc = (inputArr) => {
    // get duplicates 
    let duplicates = inputArr.filter((currentValue, currentIndex) => inputArr.indexOf(currentValue) !== currentIndex);
    // remove duplicates more than twice
    return [... new Set(duplicates)];
}
const arr2 = myFunc(arr1); // [2,3,1,5]
console.log(arr2);
