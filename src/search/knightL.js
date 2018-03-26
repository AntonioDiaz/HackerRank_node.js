let foundSolution = -1;

var calculateBFS = (n, a, b, actualX, actualY, queue, arrayChess, stepsCount) => {
    if (queue==null) {
        foundSolution = -1;
        queue = [];
    }
    if (arrayChess===undefined || arrayChess==null) {
        arrayChess = [];
        for (let i = 0; i < n; i++) {
            let arrayTemp = [];
            for (let j = 0; j < n; j++) {
                arrayTemp.push(0);
            }
            arrayChess.push(arrayTemp);
        }
        arrayChess[0][0] = 1;
    }
    let arrayMovements = [];
    arrayMovements.push({x:actualX + a, y:actualY - b});
    arrayMovements.push({x:actualX - a, y:actualY + b});
    arrayMovements.push({x:actualX - a, y:actualY - b});
    arrayMovements.push({x:actualX + a, y:actualY + b});

    arrayMovements.push({x:actualX + b, y:actualY - a});
    arrayMovements.push({x:actualX - b, y:actualY + a});
    arrayMovements.push({x:actualX - b, y:actualY - a});
    arrayMovements.push({x:actualX + b, y:actualY + a});
    let noRepetitions = [];
    arrayMovements.forEach(e => {
        if (!searchElement(noRepetitions, e)) {
            noRepetitions.push(e);
        }
    });
    for (let e of noRepetitions) {
        if (e.x >= 0 && e.y >=0
            && e.x < n && e.y < n
            && arrayChess[e.x][e.y]==0) {
            if (e.x===n-1 && e.y===n-1) {
                queue = [];
                foundSolution = stepsCount + 1;
                console.log("foundSolution " + foundSolution);
                return foundSolution;
            } else {
                var arrayCopy = arrayChess.map(function(arr) {
                    return arr.slice();
                });
                arrayCopy[e.x][e.y] = 1;
                let contains = false;
                for (let item of queue) {
                    if (item.element.x===e.x && item.element.y===e.y) {
                        contains = true;
                    }
                }
                if (!contains) {
                    queue.push({element: e, array: arrayCopy, count: stepsCount});
                }
            }
        }
    }
    if (queue.length>0) {
        let e = queue[0];
        queue.shift();
        if (foundSolution===-1) {
            calculateBFS(n, a, b, e.element.x, e.element.y, queue, e.array, e.count + 1);
        }
    }
    return foundSolution;
};

var searchElement = (array, e) => {
    for (let s of array) {
        if (s.x === e.x && s.y === e.y) {
            return true;
        }
    }
    return false;
};


var calculateSteps = (n, a, b, actualX, actualY, previousStepArray, stepsCount, stepsTotal) => {
    if (previousStepArray===undefined || previousStepArray==null) {
        previousStepArray = [];
        for (var i = 0; i < n; i++) {
            var arrayTemp = [];
            for (var j = 0; j < n; j++) {
                arrayTemp.push(0);
            }
            previousStepArray.push(arrayTemp);
        }
        previousStepArray[0][0] = 1;
    }
    let arrayMovements = [];
    arrayMovements.push([actualX + a, actualY + b]);
    arrayMovements.push([actualX + a, actualY - b]);
    arrayMovements.push([actualX - a, actualY + b]);
    arrayMovements.push([actualX - a, actualY - b]);

    //arrayMovements.push([actualX + b, actualY + a]);
    //arrayMovements.push([actualX + b, actualY - a]);
    //arrayMovements.push([actualX - b, actualY + a]);
    //arrayMovements.push([actualX - b, actualY - a]);
    arrayMovements = arrayMovements.filter(movement => {
        return movement[0] >= 0 && movement[1] >=0
          && movement[0] < n && movement[1] < n
          && previousStepArray[movement[0]][movement[1]]==0;
    });
    //console.log("arrayMovements.length " + arrayMovements.length);
    console.log("arrayMovements " + arrayMovements.join("|"));
    let steps = Number.MAX_SAFE_INTEGER;
    for (var k = 0; k < arrayMovements.length; k++) {
        console.log("stepsCount " + stepsCount);
        console.log("stepsTotal " + stepsTotal);
        let x = arrayMovements[k][0];
        let y = arrayMovements[k][1];
        //console.log(`before ${x}, ${y}`);
        var arrayCopy = previousStepArray.map(function(arr) {
            return arr.slice();
        });
        arrayCopy[x][y] = 1;
        if (x === n-1 && y === n-1) {
            console.log(`found solution ${x}, ${stepsCount} steps --> ${stepsCount + 1}`);
            return (stepsCount + 1);
        } else {
            if (stepsCount<stepsTotal) {
                let stepsTemp = calculateSteps(n, a, b, x, y, arrayCopy, stepsCount + 1, stepsTotal);
                //console.log(`after ${x}, ${y}`);
                //console.log("stepsTemp=" + stepsTemp);
                console.log("Array --> \n" + previousStepArray.join("\n"));
                if (stepsTemp!==-1 && stepsTemp<steps && stepsTemp<stepsTotal) {
                    steps = stepsTemp;
                    stepsTotal = stepsTemp;
                    //console.log("stepsTotal -->" + stepsTotal);
                }
            }
        }
    }
    return stepsTotal;
};

var knightlOnAChessboard = n => {
    //console.log("calculateSteps n=" + n);
    var arraySolutions = [];
    for (var row = 0; row < n - 1; row++) {
        var arrayRow = [];
        for (var col = 0; col < n - 1; col++) {
            let temp;
            if (row>col) {
                temp = arraySolutions[col][row];
            } else {
                temp = calculateBFS(n, row + 1, col + 1, 0, 0, null, null, 0);
                if (temp==Number.MAX_SAFE_INTEGER) {
                    temp = -1;
                }
            }
            arrayRow.push(temp.toString());
        }
        arraySolutions.push(arrayRow);
    }
    return arraySolutions;
};

exports.knightlOnAChessboard = knightlOnAChessboard;
exports.calculateSteps = calculateSteps;
exports.calculateBFS = calculateBFS;
