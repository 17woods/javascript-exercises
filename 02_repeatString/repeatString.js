const repeatString = function(repeat, n) {
    let newString = "";

    if (n < 0) {
        return "ERROR";
    }

    for (let i = 0; i < n; i += 1) {
        newString += repeat;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
