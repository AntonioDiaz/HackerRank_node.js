var assert = require("chai").assert;
var hackerankChallenge = require("../../src/sorting/insertion_sort_01.js");

describe("sorting > insertion sort: ", function() {
    var elementToInsert = 5;
    var inputArray = "2 4 6 8 3".split(" ").map(x => Number(x));
    it("input 01: " + inputArray, function() {
        var sortedArray = hackerankChallenge.insertionSort(elementToInsert, inputArray);
        assert.equal(5, sortedArray.length);
        assert.equal(3, sortedArray[1]);
    });
});