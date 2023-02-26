Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let i=0; i<this.length; i++) {
        // if pass the test by the callback function
        if (callback(this[i])) newArray.push(this[i]);
    }
    return newArray;
}
var array = [1,2,3];
let newArray = array.myFilter(element => element > 2);
console.log(newArray);
