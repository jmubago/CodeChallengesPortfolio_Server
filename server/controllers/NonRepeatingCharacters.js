// A parameter will be passed which will contain only alphabetic characters and spaces, and return the first non-repeating character.
// For example: is the parameter is "agettkgaeee" then your program should return k.
// The string will always contain at least one character and there will always be at least one non-repeating character.
import Response from '../models/response';
import { NonRepeatingCharacterChallenge } from '../challenges/NonRepeatingCharacterChallenge';

export default ((req, res) => {

    let string = req.body.string;

    let nonRepeatingCharacter = NonRepeatingCharacterChallenge(string)

    let challenge = new Response('descriptionnnn', nonRepeatingCharacter);

    res.status(200).send(challenge);
})

// let NonRepeatingCharacter = (string) => {
//     // Eliminte white spaces
//     let joingString = string.split(' ').join('');
//     let stringSplit = joingString.split('');
//     let counts = {};

//     // Count repeating characters
//     for (let i = 0; i < stringSplit.length; i++) {
//         let key = stringSplit[i];
//         counts[key] = (counts[key]) ? counts[key] + 1 : 1;

//     }

//     // Find the first non-repeating character
//     for (let x = 0; x < stringSplit.length; x++) {
//         let letter = stringSplit[x];
//         if (counts[letter] === 1) {
//             return letter;
//         }
//     }
// }

// console.log(NonRepeatingCharacter("abcdef"));
// console.log(NonRepeatingCharacter("hello world hi hey"));