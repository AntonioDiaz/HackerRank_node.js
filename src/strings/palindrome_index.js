var isPalindrome = function(inputString) {
    var stringMiddle = inputString.length / 2;
    for (var i = 0; i < stringMiddle; i++) {
        var oposite = inputString.length - 1 - i;
        if (inputString.charAt(i)!=inputString.charAt(oposite)) {
            return false;
        }
    }
    return true;
};


var palindromeIndex = function(inputString) {
    var stringMiddle = inputString.length / 2;
    for (var i = 0; i < stringMiddle; i++) {
        var oposite = inputString.length - 1 - i;
        if (inputString.charAt(i)!=inputString.charAt(oposite)) {
            //check palindrome without first letter.
            if (isPalindrome(inputString.substring(i+1, oposite + 1))) {
                return i;
            } 
            //check palindrome without last letter. 
            if (isPalindrome(inputString.substring(i, oposite))) {
                return oposite;
            }
        }
    }
    return -1;
};

exports.palindromeIndex = palindromeIndex;
exports.isPalindrome = isPalindrome;