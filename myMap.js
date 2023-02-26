Array.prototype.myMap = function(callbackFn) {
    let newArray = [];
    // loop through every elemnt in the "this" array
    for (let i=0; i<this.length; i++) {
        // do something with each element
        newArray.push(callbackFn(this[i]));
    }
    return newArray;
}
// Test
var array = [1, 2, 3];
// function (element) = callbackFn & element = this[i]
var result = array.myMap(element => element + 1);
console.log(result); 
