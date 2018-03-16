
var diagonalDifference = function (array) {
    let diagonal01 = 0;
    let diagonal02 = 0;
    //console.log("array -->" + array[]);
    for (var row = 0; row < array.length; row++) {
        for (var column = 0; column < array[row].length; column++) {
            if (column==row) {
                diagonal01 += Number(array[row][column]);
            }
            if (column+row==array.length - 1) {
                diagonal02 += Number(array[row][column]);
            }
        }
    }
    return Math.abs(diagonal01 - diagonal02);
};

exports.diagonalDifference = diagonalDifference;
