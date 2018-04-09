var countingSort02 = (arr) => {
    var countArray = [];
    var sortedArray = [];
    for(var i=0; i<100; i++) {
        countArray.push(0);
    }
    arr.forEach (element => {
        countArray[element] = countArray[element] + 1;
    });
    countArray.forEach ((element, index) => {
        for(var i=0; i<element; i++) {
            sortedArray.push(index);
        }
    });
    return sortedArray;
};

exports.countingSort02 = countingSort02;