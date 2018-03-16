var assert = require("chai").assert;
var hackerankChallenge = require("../../src/implementation/organizing_containers_of_balls.js");
var utils = require("../../src/utils.js");

describe("weighted_uniform_string: ", function() {
    it("input 01: ", function() {
        const input = "organizing_containers_of_balls_01.txt";
        let promise = utils.readFileIntoArrayTwoDimension(input);
        return promise.then(inputArray => {
            let result = hackerankChallenge.organizingContainers(inputArray);
            assert.equal("Possible", result);
        });
    });
    it("input 02: ", function() {
        const input = "organizing_containers_of_balls_02.txt";
        let promise = utils.readFileIntoArrayTwoDimension(input);
        return promise.then(inputArray => {
            let result = hackerankChallenge.organizingContainers(inputArray);
            assert.equal("Impossible", result);
        });
    });
});