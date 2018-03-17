var fullCountingSort = (arr) => {
    for (var index=0; index<arr.length; index++) {
        if (index<arr.length/2) {
            arr[index].content = "-";
        }
        arr[index].originalIndex = index;
    }
    arr.sort((a, b) => {
        if (a.value == b.value) {
            return a.originalIndex - b.originalIndex;
        } else {
            return a.value - b.value;
        }
    });
    let strReturn = "";
    arr.forEach(element => {
        strReturn += element.content + " ";
    });
    return strReturn.trim();
};

exports.fullCountingSort = fullCountingSort;
