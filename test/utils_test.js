var assert = require("chai").assert;
//var hackerankChallenge = require("../../src/warmup/simple_array_sum.js");
var utils = require("../src/utils.js");


describe("readFileIntoArray: ", function() {
    it("input 01: ", function() {
        const input = "simple_array_sum_01.txt";
        let promise = utils.readFileIntoArray(input);
        return promise.then(data => {
            assert.equal(6, data.length );
        });
    });
});

describe("readFileIntoArrayTwoDimension: ", function() {
    it("input 01: ", function() {
        const input = "diagonal_diference_01.txt";
        let promise = utils.readFileIntoArrayTwoDimension(input);
        return promise.then(data => {
            assert.equal(3, data.length);
            data.forEach(element => {
                assert.equal(3, element.length);
            });
        });
    });
});

describe("readFileline", function() {
    it ("input 01", function(){
        let promise = utils.readFileline("weighted_uniform_strings.txt");
        return promise.then(data => {
            assert.equal("abccddde", data);
        });
    });
});



