var calculateSubstringsWeights = function (inputWord) {
    let mySet = new Set();
    let previousChar = -1;
    let substringCount = 0;
    for (var char of inputWord) {
        let currentChar = char.charCodeAt(0) - 96;
        mySet.add(currentChar);
        if(currentChar==previousChar) {
            substringCount += currentChar;
        } else {
            substringCount = currentChar;
        }
        mySet.add(substringCount);
        previousChar = currentChar;
    }
    return mySet;
};

exports.calculateSubstringsWeights = calculateSubstringsWeights;
