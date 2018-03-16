var veryBigSum = function (array) {

    let sum = 0;
    for (let element of array) {
        sum += Number(element);
    }
    return sum;
};

exports.veryBigSum = veryBigSum;
