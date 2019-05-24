// A parameter will be passed which will contain only alphabetic characters and spaces, and return the first non-repeating character.
// For example: is the parameter is "agettkgaeee" then your program should return k.
// The string will always contain at least one character and there will always be at least one non-repeating character.
import Response from '../models/response';
import { NonRepeatingCharacterChallenge } from '../challenges/NonRepeatingCharacterChallenge';

export default ((req, res) => {

    let string = req.body.string;

    let nonRepeatingCharacter = NonRepeatingCharacterChallenge(string)

    let challenge = new Response(nonRepeatingCharacter);

    res.status(200).send(challenge);
})