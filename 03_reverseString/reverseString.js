const reverseString = function(str) {
    let newString = [];
    for (let i in str) {
        newString.unshift(str[i]);
    }
    newString = newString.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
