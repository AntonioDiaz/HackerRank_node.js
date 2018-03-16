var assert = require("chai").assert;
var hackerankChallenge = require("../../src/sorting/tutorial_intro.js");

describe("sorting > introTutorial: ", function() {
    var elementToFind = 4;
    var inputArray = "1 4 5 7 9 12".split(" ").map(x => Number(x));
    it("input 01: ", function() {
        assert.equal(1, hackerankChallenge.introTutorial(elementToFind, inputArray));
    });
});