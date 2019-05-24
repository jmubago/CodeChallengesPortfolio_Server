// Many people are familiar with Roman numbers for relatively small numbers. The symbols I,V,X,L,C,D, and M represent
// the decimal values 1,5,10,50,100,500 and 1000 respectively. To represent other values, these symbols, and multiples 
// where necessary, are concatenated, with the smaller-value value symbols written furthers to the right.
// For example number 3 is represented as III, and 73 as LXXIII.
// The exceptions to this rule occurs for numbers having unit values of 4 and 9, and for tens values of 40 and 90.
// for these cases, the Roman numeral representations are IV (4), IX(9), XL(40), and XC(90). So the Roman numeral representations
// for 24, 39, 44, 49, and 94 are XXIV, XXXIX, XLIV, XLIX, AND XCIV, respectively.

// Write a program to convert a cardinal number to a Roman numeral.

import Response from '../models/response';
import { RomanNumberChallenge } from '../challenges/RomanNumbersChallenge';

export default ((req, res) => {

    let number = req.body.number;

    let romanNumberChallenge = RomanNumberChallenge(number)

    let challenge = new Response(romanNumberChallenge);

    res.status(200).send(challenge);
})