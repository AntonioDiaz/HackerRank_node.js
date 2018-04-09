var assert = require("chai").assert;
var hackerankChallenge = require("../../../src/algorithms/sorting/full_counting_sort.js");
var utils = require("../../../src/utils.js");

describe("sorting > full counting sort: ", function() {
    it("input 01: ", function() {
        const inputFile = "full_counting_sort_input.txt";
        let arrayInput = [];
        return utils.readFileIntoArrayTwoDimension(inputFile).then(data => {
            data.forEach (element => {
                arrayInput.push({
                    value: element[0],
                    content: element[1]});
            });
            var stringReturn = hackerankChallenge.fullCountingSort(arrayInput);
            const stringExpected = "- - - - - to be or not to be - that is the question - - - -";
            assert.deepEqual(stringExpected, stringReturn);
        });
    });
});
