var assert = require("chai").assert;
var hackerankChallenge = require("../../src/search/knightL.js");

// describe("knightL helper function: ", function() {
//     it("input 01: ", function() {
//         let n = 5;
//         let expectedResult = 4;
//         let x = 1;
//         let y = 1;
//         assert.equal(expectedResult, hackerankChallenge.calculateSteps(n, x, y, 0, 0, null, 0, Number.MAX_SAFE_INTEGER));
//     });
//     it("input 02: ", function() {
//         let n = 5;
//         let expectedResult = 4;
//         let x = 1;
//         let y = 2;
//         assert.equal(expectedResult, hackerankChallenge.calculateSteps(n, x, y, 0, 0, null, 0, Number.MAX_SAFE_INTEGER));
//     });
//     it("input 03: ", function() {
//         let n = 5;
//         let expectedResult = 2;
//         let x = 1;
//         let y = 3;
//         assert.equal(expectedResult, hackerankChallenge.calculateSteps(n, x, y, 0, 0, null, 0, Number.MAX_SAFE_INTEGER));
//     });
//     it("input 04: ", function() {
//         let n = 5;
//         let expectedResult = 8;
//         let x = 1;
//         let y = 4;
//         assert.equal(expectedResult, hackerankChallenge.calculateSteps(n, x, y, 0, 0, null, 0, Number.MAX_SAFE_INTEGER));
//     });
// });
//

describe("knightL BSD: ", function() {
    it("input 01: ", function() {
        let n = 5;
        let expectedResult = 4;
        let x = 1;
        let y = 1;
        assert.equal(expectedResult, hackerankChallenge.calculateBFS(n, x, y, 0, 0, null, null, 0));
    });
    it("input 02: ", function() {
        let n = 5;
        let expectedResult = 4;
        let x = 1;
        let y = 2;
        assert.equal(expectedResult, hackerankChallenge.calculateBFS(n, x, y, 0, 0, null, null, 0));
    });
    it("input 03: ", function() {
        let n = 5;
        let expectedResult = 2;
        let x = 1;
        let y = 3;
        assert.equal(expectedResult, hackerankChallenge.calculateBFS(n, x, y, 0, 0, null, null, 0));
    });
    it("input 04: ", function() {
        let n = 5;
        let expectedResult = 8;
        let x = 1;
        let y = 4;
        assert.equal(expectedResult, hackerankChallenge.calculateBFS(n, x, y, 0, 0, null, null, 0));
    });
    it("input 05: ", function() {
        let n = 5;
        let expectedResult = 1;
        let x = 4;
        let y = 4;
        assert.equal(expectedResult, hackerankChallenge.calculateBFS(n, x, y, 0, 0, null, null, 0));
    });
});


describe("knightL callenge: small", function() {
    let n = 5;
    let output = "4 4 2 8, 4 2 4 4,2 4 -1 -1, 8 4 -1 1";
    var arrayExpected = output.split(",");
    arrayExpected = arrayExpected.map(element => {
        return element.trim().split(" ");
    });
    it("input 01: ", function() {
        let arrayReturn = hackerankChallenge.knightlOnAChessboard(n);
        assert.deepEqual(arrayExpected, arrayReturn);
    });
});

describe("knightL callenge: large", function() {
    let n = 12;
    let output = "11 8 7 6 7 10 7 6 9 2 11, 8 -1 6 -1 6 -1 14 -1 2 -1 -1, 7 6 -1 8 7 -1 7 2 -1 -1 -1 , 6 -1 8 -1 6 -1 2 -1 -1 -1 -1, 7 6 7 6 -1 2 -1 -1 -1 -1 -1,10 -1 -1 -1 2 -1 -1 -1 -1 -1 -1,7 14 7 2 -1 -1 -1 -1 -1 -1 -1,6 -1 2 -1 -1 -1 -1 -1 -1 -1 -1,9 2 -1 -1 -1 -1 -1 -1 -1 -1 -1, 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1,11 -1 -1 -1 -1 -1 -1 -1 -1 -1 1";
    var arrayExpected = output.split(",");
    arrayExpected = arrayExpected.map(element => {
        return element.trim().split(" ");
    });
    it("input 01: ", function() {
        let arrayReturn = hackerankChallenge.knightlOnAChessboard(n);
        assert.deepEqual(arrayExpected, arrayReturn);
    });
});

describe("knightL callenge: large", function() {
    let n = 24;
    let output =
`23 16 13 10 9 10 9 6 9 18 13 22 13 18 15 14 17 10 19 6 21 2 23
16 -1 10 -1 10 -1 6 -1 14 -1 14 -1 10 -1 26 -1 6 -1 38 -1 2 -1 -1
13 10 -1 10 7 -1 9 10 -1 20 11 -1 13 6 -1 26 19 -1 19 2 -1 -1 -1
10 -1 10 -1 10 -1 10 -1 6 -1 6 -1 18 -1 30 -1 18 -1 2 -1 -1 -1 -1
9 10 7 10 -1 6 7 6 13 -1 11 14 17 26 -1 14 21 2 -1 -1 -1 -1 -1
10 -1 -1 -1 6 -1 10 -1 -1 -1 22 -1 18 -1 -1 -1 2 -1 -1 -1 -1 -1 -1
9 6 9 10 7 10 -1 16 15 6 11 10 15 -1 19 2 55 -1 -1 -1 -1 -1 -1
6 -1 10 -1 6 -1 16 -1 14 -1 14 -1 22 -1 2 -1 -1 -1 -1 -1 -1 -1 -1
9 14 -1 6 13 -1 15 14 -1 10 17 -1 17 2 -1 -1 -1 -1 -1 -1 -1 -1 -1
18 -1 20 -1 -1 -1 6 -1 10 -1 6 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
13 14 11 6 11 22 11 14 17 6 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
22 -1 -1 -1 14 -1 10 -1 -1 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
13 10 13 18 17 18 15 22 17 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
18 -1 6 -1 26 -1 -1 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
15 26 -1 30 -1 -1 19 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
14 -1 26 -1 14 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
17 6 19 18 21 2 55 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
10 -1 -1 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
19 38 19 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
6 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
21 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
23 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 1`;
    var arrayExpected = output.split("\n");
    arrayExpected = arrayExpected.map(element => {
        return element.trim().split(" ");
    });
    it("input 01: ", function() {
        let arrayReturn = hackerankChallenge.knightlOnAChessboard(n);
        assert.deepEqual(arrayExpected, arrayReturn);
    });
});

describe("knightL callenge: large 2", function() {
    let n = 25;
    let output =
`24 16 12 12 8 8 6 16 10 8 4 4 8 12 16 20 14 28 10 36 6 44 2 48
16 12 12 8 8 6 8 8 16 4 22 4 24 8 24 12 24 6 24 20 24 2 24 24
12 12 8 8 6 6 6 16 4 16 10 4 14 16 6 16 16 12 16 16 2 16 16 16
12 8 8 6 12 6 12 4 12 10 12 4 12 12 12 8 12 12 12 2 12 12 12 12
8 8 6 12 -1 8 4 16 6 -1 12 4 10 28 -1 20 8 24 2 -1 -1 -1 -1 -1
8 6 6 6 8 4 8 8 6 6 8 4 8 8 8 8 8 2 8 8 8 8 8 8
6 8 6 12 4 8 -1 16 10 20 10 4 12 -1 10 20 2 -1 16 -1 -1 -1 -1 -1
16 8 16 4 16 8 16 3 16 8 20 4 24 12 36 2 76 36 -1 16 -1 -1 -1 3
10 16 4 12 6 6 10 16 -1 12 6 4 14 32 2 -1 -1 -1 -1 -1 -1 -1 -1 -1
8 4 16 10 -1 6 20 8 12 -1 8 4 24 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
4 22 10 12 12 8 10 20 6 8 -1 4 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
4 4 4 4 4 4 4 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4
8 24 14 12 10 8 12 24 14 24 2 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
12 8 16 12 28 8 -1 12 32 2 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
16 24 6 12 -1 8 10 36 2 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
20 12 16 8 20 8 20 2 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
14 24 16 12 8 8 2 76 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
28 6 12 12 24 2 -1 36 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
10 24 16 12 2 8 16 -1 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
36 20 16 2 -1 8 -1 16 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
6 24 2 12 -1 8 -1 -1 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
44 2 16 12 -1 8 -1 -1 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
2 24 16 12 -1 8 -1 -1 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
48 24 16 12 -1 8 -1 3 -1 -1 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 1`;
    var arrayExpected = output.split("\n");
    arrayExpected = arrayExpected.map(element => {
        return element.trim().split(" ");
    });
    it("input 01: ", function() {
        let arrayReturn = hackerankChallenge.knightlOnAChessboard(n);
        assert.deepEqual(arrayExpected, arrayReturn);
    });
});
describe("knightL callenge: large 3", function() {
    let n = 22;
    let output =
`21 14 11 10 9 6 9 10 9 20 11 18 13 14 15 10 17 6 19 2 21
14 -1 10 -1 6 -1 14 -1 10 -1 10 -1 22 -1 6 -1 34 -1 2 -1 -1
11 10 7 6 9 6 7 6 5 10 11 6 13 18 5 22 19 2 33 -1 7
10 -1 6 -1 10 -1 14 -1 6 -1 10 -1 26 -1 18 -1 2 -1 -1 -1 -1
9 6 9 10 -1 6 9 16 9 -1 15 10 15 14 -1 2 -1 -1 -1 -1 -1
6 -1 6 -1 6 -1 14 -1 6 -1 18 -1 10 -1 2 -1 -1 -1 -1 -1 -1
9 14 7 14 9 14 3 14 13 18 15 22 19 2 33 -1 -1 -1 -1 -1 3
10 -1 6 -1 16 -1 14 -1 10 -1 22 -1 2 -1 -1 -1 -1 -1 -1 -1 -1
9 10 5 6 9 6 13 10 -1 6 19 2 -1 -1 -1 -1 -1 -1 -1 -1 -1
20 -1 10 -1 -1 -1 18 -1 6 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
11 10 11 10 15 18 15 22 19 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
18 -1 6 -1 10 -1 22 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
13 22 13 26 15 10 19 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
14 -1 18 -1 14 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
15 6 5 18 -1 2 33 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
10 -1 22 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
17 34 19 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
6 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
19 2 33 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
21 -1 7 -1 -1 -1 3 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 1`;
    var arrayExpected = output.split("\n");
    arrayExpected = arrayExpected.map(element => {
        return element.trim().split(" ");
    });
    it("input 01: ", function() {
        let arrayReturn = hackerankChallenge.knightlOnAChessboard(n);
        assert.deepEqual(arrayExpected, arrayReturn);
    });
});
