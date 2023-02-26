const count = {};
const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
const myFunc = (inputArr) => {
    for (let i = 0; i < inputArr.length; i++) {
        if (count[inputArr[i]] == undefined) {
            count[inputArr[i]] = 1;
        }
        else count[inputArr[i]]++;
    }
    return count;
}
console.log(myFunc(myArr)) // {'face': 2, 'zalo': 3, 'gmail':1} 
