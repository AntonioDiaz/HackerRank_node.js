var toys = (arrayInput => {
    arrayInput = arrayInput.sort((a, b) => {return a - b;});
    let count = 1;
    let firstElement = -1;
    for (let n of arrayInput) {
        if (firstElement==-1) {
            firstElement = n;
        } else {
            if(n - firstElement> 4) {
                count++;
                firstElement = n;
            }
        }
    }
    return count;
});

exports.toys = toys;