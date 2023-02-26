const sum = 10;
const array = [1,7,9,2,5,3,8];
const result = [];
const n = array.length;
for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
        if (array[i] + array[j] == sum) {
            result.push([array[i], array[j]]);
            break;
        }
    }
}
console.log(result);
