var assert = require("chai").assert;
var hackerankChallenge = require("../../../src/algorithms/sorting/insertion_sort_02.js");

describe("sorting > insertion sort 02: ", function() {
    var inputArray = "1 4 3 5 6 2".split(" ").map(x => Number(x));
    it("input 01: " + inputArray, function() {
        var sortedArray = hackerankChallenge.insertionSort02(inputArray);
        assert.equal(6, sortedArray.length);
        assert.equal(2, sortedArray[1]);
    });
});
