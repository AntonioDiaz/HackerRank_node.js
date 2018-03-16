var assert = require("chai").assert;
var hackerankChallenge = require("../../src/warmup/diagonal_difference.js");
var utils = require("../../src/utils.js");

describe("diagonal_difference: ", function() {
    it("input 01: ", function() {
        const input = "diagonal_diference_01.txt";
        let promise = utils.readFileIntoArrayTwoDimension(input);
        return promise.then(array => {
            assert.equal(15, hackerankChallenge.diagonalDifference(array));
        });
    });
});
