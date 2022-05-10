const sumAll = function(...nums) {
    if (nums.length > 2) {
        return "ERROR";
    }
    if (nums[1] < 0 || nums[0] < 0) {
        return "ERROR";
    }
    if (nums.some((elem) => {
        return (typeof elem != "number");
    })) {
        return "ERROR";
    };

    nums.sort(function(a, b){return b - a});
    let n = 0;

    while (nums[0] >= nums[1]) {
        n += nums[1];
        nums[1] += 1;
    }

    return n;
};

// Do not edit below this line
module.exports = sumAll;
