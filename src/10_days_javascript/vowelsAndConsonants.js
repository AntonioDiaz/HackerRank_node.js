function isVowel (c) {
    return /[aeiou]/.test(c);
}

function vowelsAndConsonants(s) {
    //print vowels
    [...s].forEach(c => {
        if (isVowel(c)) console.log(c);
    });
    //print not vowels
    [...s].forEach(c => {
        if (!isVowel(c)) console.log(c);
    });
}

vowelsAndConsonants("hola");