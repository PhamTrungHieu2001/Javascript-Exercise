Array.prototype.myReduce = function (callback) {
    let accumulator = this[0];//
    for (let i = 1; i < this.length; i++) {
        accumulator += callback(accumulator, this[i]);
        console.log(accumulator);
        return callback(accumulator, this[i]);
    }
    
}
// callback (result, item)
var array = [1,2,3];
let newArray = array.myReduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(newArray);
