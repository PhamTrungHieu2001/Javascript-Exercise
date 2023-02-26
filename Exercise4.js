// With Set
var array = [1,2,3,1,2,3,4,5,6,4];
const remove1 = [...new Set(array)];

// Without Set
const remove2 = [];
array.forEach(element => {
    if (!remove2.includes(element)) {
        remove2.push(element);
    }
});
