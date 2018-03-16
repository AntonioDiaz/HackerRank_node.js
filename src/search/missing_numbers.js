var missingNumbers = function(arrayA, arrayB) {
    var arrayMap = new Map();
    arrayA.forEach(function(element) {
        var repetitions = 1;
        if (arrayMap.get(element)) {
            repetitions = arrayMap.get(element) + 1;
        }
        arrayMap.set(element, repetitions);
    });
    var setLostNumbers = new Set();
    arrayB.forEach(function(element) {
        if (arrayMap.get(element) && arrayMap.get(element)>0) {
            arrayMap.set(element, arrayMap.get(element) - 1);
        } else {
            setLostNumbers.add(element);
        }
    });
    let arrayLostNumbers = Array.from(setLostNumbers);
    return arrayLostNumbers.sort();
};

exports.missingNumbers = missingNumbers; 
