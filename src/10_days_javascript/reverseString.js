function reverseString(s) {
    try {
        s = s.split("").reverse().join("");       
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(s);
    }
}

reverseString ("1234");
reverseString (Number(1234));
