export function NonRepeatingCharacterChallenge(string) {

    // Eliminte white spaces
    let joingString = string.split(' ').join('');
    let stringSplit = joingString.split('');
    let counts = {};

    // Count repeating characters
    for (let i = 0; i < stringSplit.length; i++) {
        let key = stringSplit[i];
        counts[key] = (counts[key]) ? counts[key] + 1 : 1;

    }

    // Find the first non-repeating character
    for (let x = 0; x < stringSplit.length; x++) {
        let letter = stringSplit[x];
        if (counts[letter] === 1) {
            return letter;
        }
    }
}