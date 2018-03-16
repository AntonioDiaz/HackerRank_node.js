var assert = require("chai").assert;
var hackerankChallenge = require("../../src/strings/palindrome_index.js");

describe("is_palindrome: ", function() {
    it("input 01: ", function() {
        assert.isFalse(hackerankChallenge.isPalindrome("aaab"));
    });
    it("input 02: ", function() {
        assert.isFalse(hackerankChallenge.isPalindrome("baa"));
    });
    it("input 03: ", function() {
        assert.isTrue(hackerankChallenge.isPalindrome("aaa"));
    });
    it("input 04: ", function() {
        assert.isTrue(hackerankChallenge.isPalindrome("aaa"));
    });
});

describe("palindrome_index: ", function() {
    it("input 01: ", function() {
        assert.equal(3, hackerankChallenge.palindromeIndex("aaab"));
    });
    it("input 02: ", function() {
        assert.equal(0, hackerankChallenge.palindromeIndex("baa"));
    });
    it("input 03: ", function() {
        assert.equal(-1, hackerankChallenge.palindromeIndex("aaa"));
    });
});