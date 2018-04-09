var assert = require("chai").assert;
var hackerankChallenge = require("../../../src/algorithms/greedy/permuting_two_arrays.js");

describe("permuting_two_arrays: ", function() {
    it("input 01: ", function() {
        const k = 10;
        const arrayA = "2 1 3".split(" ").map(x => Number(x));
        const arrayB = "7 8 9".split(" ").map(x => Number(x));
        let satisfyingRelation = hackerankChallenge.twoArrays(k, arrayA, arrayB);
        assert.equal("YES", satisfyingRelation);
    });
    it("input 02: ", function() {
        const k = 5;
        const arrayA = "1 2 2 1".split(" ").map(x => Number(x));
        const arrayB = "3 3 3 4".split(" ").map(x => Number(x));
        let satisfyingRelation = hackerankChallenge.twoArrays(k, arrayA, arrayB);
        assert.equal("NO", satisfyingRelation);
    });
});
