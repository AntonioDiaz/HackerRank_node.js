var twoArrays = (k, arrayA, arrayB) => {
    arrayA.sort((a,b)=>a - b);
    arrayB.sort((a,b)=>b - a);
    for (let i=0; i<arrayA.length; i++) {
        if ((arrayA[i] + arrayB[i]) < k) {
            return "NO";
        }
    }
    return "YES";
};
exports.twoArrays = twoArrays;
