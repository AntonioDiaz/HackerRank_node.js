var printArray = inputArray => {
    inputArray.forEach (element => {
        console.log(element + " ");
    });
};

var insertionSort = (n, inputArray) => {
    var e = inputArray[inputArray.length -1];
    var since = inputArray.length - 2;
    var i = since;
    for (i; e < inputArray[i]; i--) {
        inputArray[i + 1] = inputArray[i];
        console.log(inputArray.join(" "));
    }
    inputArray[i + 1] = e;
    console.log(inputArray.join(" "));
    return inputArray;
};

exports.insertionSort = insertionSort;