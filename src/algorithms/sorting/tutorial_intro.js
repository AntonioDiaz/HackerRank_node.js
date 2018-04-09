var introTutorial = (elementToFind, array) => {
    var indexFound = -1;
    array.forEach((value, index) => {
        if (value===elementToFind) {
            indexFound = index;
        }
    });
    return indexFound;
};

var introTutorialError = (elementToFind, array) => {
    array.forEach((value, index) => {
        console.log("elementToFind " + elementToFind);
        console.log("value " + value);
        console.log("Number(value)==Number(elementToFind) " + (Number(value)==Number(elementToFind)));
        if (Number(value)==Number(elementToFind)) {
            console.log("termina");
            return index;
        }
    });
    return -1;
};

exports.introTutorial = introTutorial;