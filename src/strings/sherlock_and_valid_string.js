var getArrayRepetitions = (inputString) => {
    var previousChar = -1;
    var countRepetitions = 0;
    var repetitionsArray = [];
    for (var i = 0; i < inputString.length; i++) {
        var currentChar = inputString.charAt(i);
        if (previousChar!=-1 && previousChar!=currentChar) {
            repetitionsArray.push(countRepetitions);
            countRepetitions = 0;
        }
        countRepetitions++;
        previousChar = currentChar;
    }
    if (countRepetitions!=0) {
        repetitionsArray.push(countRepetitions);
    }
    return repetitionsArray;
};

var isSherlockValidString = (inputString) => {
    var mapCharsAndRepetitions = new Map();
    for (var i = 0; i < inputString.length; i++) {
        var repetitions = 1;
        var currentChar = inputString.charAt(i);
        if(mapCharsAndRepetitions.has(currentChar)) {
            repetitions = mapCharsAndRepetitions.get(currentChar) + 1;
        }
        mapCharsAndRepetitions.set(currentChar, repetitions);
    }
    var repetitionsMap = new Map();
    mapCharsAndRepetitions.forEach(value => {
        var repetitionsCount = 1;
        if (repetitionsMap.has(value)) {
            repetitionsCount++;
        }
        repetitionsMap.set(value, repetitionsCount);
    });
    if (repetitionsMap.size>2) {
        return "NO";
    }
    if (repetitionsMap.size==2) {
        var arrayRepetitions = Array.from(repetitionsMap);
        var frecuency01 = arrayRepetitions[0][0];
        var frecuency02 = arrayRepetitions[1][0];
        var frecuencyRepetition01 = arrayRepetitions[0][1];
        var frecuencyRepetition02 = arrayRepetitions[1][1];
        var diff = Math.abs(frecuency01 - frecuency02);
        if(frecuency01==1 && frecuencyRepetition01==1){
            return "YES";
        }
        if(frecuency02==1 && frecuencyRepetition02==1){
            return "YES";
        }        
        if ((frecuencyRepetition01==1 || frecuencyRepetition02==1) && diff==1) {
            return "YES";
        }
        return "NO";
    }
    return "YES";
};


// 2 1 2 --> YES
// 2 1 1 --> YES
var isSherlockValidStringOLD = (inputString) => {
    console.log("inputString " + inputString);
    var repetitionsArray = getArrayRepetitions(inputString);
    var firstDiffFound = false;
    var secondDiffFound = false;
    var candiate01 = -1;
    var candiate02 = -1;
    if (repetitionsArray.length>1) {
        for (var i = 1; i < repetitionsArray.length; i++) {
            var diff = Math.abs(repetitionsArray[i-1] - repetitionsArray[i]);
            if (diff>1) {
                console.log("diff " + diff);
                return "NO";
            } 
            if(diff==1) {
                if (!firstDiffFound) {
                    firstDiffFound = true;
                    candiate01 = repetitionsArray[i-1];
                    candiate02 = repetitionsArray[i];
                } else {
                    if (secondDiffFound || repetitionsArray[i]!=candiate01 && repetitionsArray[i]!=candiate02) {
                        console.log("found " + secondDiffFound);
                        console.log("candiate01 " + candiate01);
                        return "NO";
                    }
                    secondDiffFound = true;
                }
            }
        }
    }
    console.log("end");
    return "YES";
};

exports.isSherlockValidString = isSherlockValidString;
exports.getArrayRepetitions = getArrayRepetitions;