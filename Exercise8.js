const arr1 = [
    { make: 'audi', model: 'r8', year: '2012' }, 
    { make: 'audi', model: 'rs5', year: '2013' }, 
    { make: 'ford', model: 'mustang', year: '2012' }, 
    { make: 'ford', model: 'fusion', year: '2015' }, 
    { make: 'kia', model: 'optima', year: '2012' }];
function myFunc(property, array) {
    const result = {};
    for (let i=0; i<array.length; i++) {
        const type = array[i][property];
        if (result[type] == undefined) {
            result[type] = [];
        }
        result[type].push(array[i]);
    }
    return result;
}
console.log(myFunc('make', arr1));
