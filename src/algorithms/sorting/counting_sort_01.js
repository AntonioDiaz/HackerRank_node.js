var countingSort01 = (arr) => {
    var countArray = [];
    for(var i=0; i<100; i++) {
        countArray.push(0);
    }
    arr.forEach (element => {
        countArray[element] = countArray[element] + 1;
    }); 
    return countArray;
};

exports.countingSort01 = countingSort01;