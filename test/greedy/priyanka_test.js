var assert = require("chai").assert;
var hackerankChallenge = require("../../src/greedy/priyanka.js");

describe("greedy > priyanca and toys: ", function() {
    var input = "1 2 3 21 7 12 14 21";
    var inputArray = input.split(" ").map(x => Number(x));
    it("input 01: ", function() { 
        assert.equal(4, hackerankChallenge.toys(inputArray));
    });
});



