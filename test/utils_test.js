var assert = require("chai").assert;
//var hackerankChallenge = require("../../../src/warmup/simple_array_sum.js");
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
    it("input 02: ", function() {
        const input = "full_counting_sort_input.txt";
        let promise = utils.readFileIntoArrayTwoDimension(input);
        const arrayExpected = "0,ab,6,cd,0,ef,6,gh,4,ij,0,ab,6,cd,0,ef,6,gh,0,ij,4,that,3,be,0,to,1,be,5,question,1,or,2,not,4,is,2,to,4,the";
        return promise.then(data => {
            assert.equal(20, data.length);
            assert.equal(arrayExpected, data.join(","));
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
