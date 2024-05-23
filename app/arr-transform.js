var map = function(arr, fn) {
    returnedArray = [];
    for(let i = 0; i<arr.length; i++){
        returnedArray.push(fn(arr[i], i))
    }
    return returnedArray
};
module.exports = map;