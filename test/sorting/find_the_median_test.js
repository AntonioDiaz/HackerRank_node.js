var assert = require("chai").assert;
var hackerankChallenge = require("../../src/sorting/find_the_median.js");

describe("sorting > find the Median: ", function() {
    var input = "0 1 2 4 6 5 3";
    var inputArray = input.split(" ").map(x => Number(x));
    it("input 01: ", function() {
        assert.equal(3, hackerankChallenge.findMedian(inputArray));
    });
});
