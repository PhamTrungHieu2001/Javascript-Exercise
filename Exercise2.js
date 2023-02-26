var array = [1,7,9,2,5,3,8];
var n = array.length;
array.sort((a, b) => a - b);
console.log([array[n-1], array[n-2]]);
