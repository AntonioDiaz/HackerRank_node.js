var assert = require("chai").assert;
var hackerankChallenge = require("../../../src/algorithms/strings/sherlock_and_valid_string.js");


describe("getArrayRepetitions: ", function() {
    var inputString01 = "aabbcc";
    it("Input 01 " + inputString01, function() {
        var arrayRepetitions = hackerankChallenge.getArrayRepetitions(inputString01);
        assert.equal(3, arrayRepetitions.length);
        assert.equal(2, arrayRepetitions[0]);
        assert.equal(2, arrayRepetitions[1]);
        assert.equal(2, arrayRepetitions[2]);
    });
    var inputString02 = "aabbc";
    it("Input 02 " + inputString02, function() {
        var arrayRepetitions = hackerankChallenge.getArrayRepetitions(inputString02);
        assert.equal(3, arrayRepetitions.length);
        assert.equal(2, arrayRepetitions[0]);
        assert.equal(2, arrayRepetitions[1]);
        assert.equal(1, arrayRepetitions[2]);
    });
});

describe("isSherlockValidString: ", function() {
    var input01 = "aabbcc";
    it("input 01: " + input01, function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input01));
    });
    var input02 = "baacdd";
    it("input 02: " + input02, function() {
        assert.equal("NO", hackerankChallenge.isSherlockValidString(input02));
    });
    var input03 = "aabbccc";
    it("input 03: " + input03, function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input03));
    });
    var input04 = "aabbc";
    it("input 04: " + input04, function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input04));
    });
    var input05 = "abcccc";
    it("input 05: " + input05, function() {
        assert.equal("NO", hackerankChallenge.isSherlockValidString(input05));
    });
    var input06 = "abbcd";
    it("input 06: " + input06 , function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input06));
    });
    var input07 = "aabcc";
    it("input 07: " + input07, function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input07));
    });
    var input08 = "aabcc";
    it("input 08: " + input08, function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input08));
    });
    var input09 = "jtqgugmcsxvdwidtcyqpogkdifapuloqykjfxruvfrshcehekoiwbpbrprahwvhliglyxynjotbaswnnnmxbkmcftvsdqajemeul";
    it("input 09: " + input09, function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input09));
    });
    var input10 = "hfchdkkbfifgbgebfaahijchgeeeiagkadjfcbekbdaifchkjfejckbiiihegacfbchdihkgbkbddgaefhkdgccjejjaajgijdkd";
    it("input 10: " + input10, function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input10));
    });
    var input11 = "accc";
    it("input 11: " + input11, function() {
        assert.equal("YES", hackerankChallenge.isSherlockValidString(input11));
    });
});
