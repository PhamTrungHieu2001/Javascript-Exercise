Array.prototype.myReduce = function (callback) {
    let accumulator = this[0];
    for (let i = 1; i<this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;    
}
var array = [1,2,3,4,5];
let newArray = array.myReduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});
console.log(newArray);

