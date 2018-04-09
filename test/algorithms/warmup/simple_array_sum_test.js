var assert = require("chai").assert;
var hackerankChallenge = require("../../../src/algorithms/warmup/simple_array_sum.js");
var utils = require("../../../src/utils.js");


describe("simple_array_sum: ", function() {
    it("input 01: ", function() {
        const input = "simple_array_sum_01.txt";
        let promise = utils.readFileIntoArray(input);
        return promise.then(array => {
            let n = array.length;
            assert.equal(31, hackerankChallenge.simpleArraySum(n, array));
        });
    });
});
