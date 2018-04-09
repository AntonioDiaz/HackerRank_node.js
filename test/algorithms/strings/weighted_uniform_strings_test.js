var assert = require("chai").assert;
var hackerankChallenge = require("../../../src/algorithms/strings/weighted_uniform_strings.js");
var utils = require("../../../src/utils.js");

describe("weighted_uniform_string: ", function() {
    it("input 01: ", function() {
        const input = "weighted_uniform_strings.txt";
        let promise = utils.readFileline(input);
        return promise.then(myWord => {
            let weights = hackerankChallenge.calculateSubstringsWeights(myWord);
            assert.equal(8, weights.size);
            assert.isTrue(weights.has(1));
            assert.isTrue(weights.has(12));
            assert.isFalse(weights.has(18));
        });
    });
});
