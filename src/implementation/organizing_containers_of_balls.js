var organizingContainers = function (inputArray) {
    var mapSumsRows = new Map();
    var mapSumsColumns = new Map();
    for (var row = 0; row < inputArray.length; row++) {
        var rowSum = 0;
        var columnSum = 0;
        for (var column = 0; column < inputArray[row].length; column++) {
            rowSum += Number(inputArray[row][column]);
            columnSum += Number(inputArray[column][row]);
        }
        var rowSumRepeated = 1;
        if (mapSumsRows.get(rowSum)!=null) {
            rowSumRepeated++;
        }
        mapSumsRows.set(rowSum, rowSumRepeated);

        var columnsSumRepeated = 1;
        if (mapSumsColumns.get(columnSum)!=null) {
            columnsSumRepeated++;
        }
        mapSumsColumns.set(columnSum, columnsSumRepeated);
    }
    for (var clave of mapSumsRows.keys()) {
        if (mapSumsColumns.get(clave)==null || mapSumsRows.get(clave)!=mapSumsColumns.get(clave)) {
            return "Impossible";
        }
    }
    return "Possible";
};

exports.organizingContainers = organizingContainers;