
var simpleArraySum = function (n, ar) {
    // Complete this function
    let sum = 0;
    for (let element of ar) {
        sum += Number(element);
    }
    return sum;
};

exports.simpleArraySum = simpleArraySum;
