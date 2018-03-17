var insertionSort02 = (arr) => {
    if (arr.length>=1) {
        for (var i=1;i<arr.length;i++) {
            for (var j = i; j>0; j--) {
                if (arr[j-1]>arr[j]) {
                    var temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
};

exports.insertionSort02 = insertionSort02;
