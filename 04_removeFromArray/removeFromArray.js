const removeFromArray = function(arr, ...remove) {
    let newArr = arr.filter((elem) => {
        return !remove.includes(elem);
    });
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
