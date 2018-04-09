var assert = require("chai").assert;
var hackerankChallenge = require("../../../src/algorithms/search/missing_numbers.js");
var utils = require("../../../src/utils.js");
var fs = require("fs");
var readline = require("readline");

describe("missing_numbers: ", function() {
    it("input 01: ", function() {
        const input = "missing_numbers_01.txt";
        let promise = readInput(input);
        return promise.then(inputArrays => {
            let missingNumbersArray = hackerankChallenge.missingNumbers(inputArrays[0], inputArrays[1]);
            assert.equal(3, missingNumbersArray.length);
            assert.equal(204, missingNumbersArray[0]);
            assert.equal(205, missingNumbersArray[1]);
            assert.equal(206, missingNumbersArray[2]);
        });
    });
    it("input 02: ", function() {
        const input = "missing_numbers_02.txt";
        let promise = readInput(input);
        return promise.then(inputArrays => {
            let missingNumbersArray = hackerankChallenge.missingNumbers(inputArrays[0], inputArrays[1]);
            assert.equal(8, missingNumbersArray.length);
            assert.equal(3670, missingNumbersArray[0]);
            assert.equal(3720, missingNumbersArray[7]);
        });
    });
});


var readInput = function (fileInputPath) {
    return new Promise((resolve, reject) => {
        var myInterface = readline.createInterface({
            input: fs.createReadStream(utils.INPUT_PATH + fileInputPath)
        });
        try {
            var arrayA;
            var arrayB;
            var linesCount = 0;
            myInterface.on("line", function(line) {
                if (linesCount==1) {
                    arrayA = line.split(" ");
                }
                if (linesCount==3) {
                    arrayB = line.split(" ");
                }
                linesCount++;
            });
            myInterface.on("close", function(){
                resolve([arrayA, arrayB]);
            });
        } catch (error) {
            reject (error);
        }
    });
};
