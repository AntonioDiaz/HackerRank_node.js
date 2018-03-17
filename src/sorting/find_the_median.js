var findMedian = (arr) => {
    arr.sort((a,b) => {
        return a - b;
    });
    console.log(arr);
    return arr[(arr.length - 1)/2];
};

exports.findMedian = findMedian;
