var assert = require("chai").assert;
var hackerankChallenge = require("../../src/warmup/very_big_sum.js");
var utils = require("../../src/utils.js");


describe("very_big_sum: ", function() {
    it("input 01: ", function() {
        const input = "very_big_sum.txt";
        let promise = utils.readFileIntoArray(input);
        return promise.then(array => {
            assert.equal(5000000015, hackerankChallenge.veryBigSum(array));
        });
    });
});