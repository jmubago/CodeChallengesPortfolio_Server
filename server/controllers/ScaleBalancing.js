// Given two arrays with integers, the first being the weights on a balance scale (left, and right sides) and the secon array being a list of
// available weigts as positive integers.
// Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights.
// For example array1 = [5,9] and array2 = [1,2,6,7] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side.
// It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side.
// Both scales will now equal 11 and they are perfectly balanced.
// Your program should return a comma separated string of the weights that were used from the list in ascending order, do for this example your
// program should return the string "2,6"
// There will only ever be one unique solution and the list of avilable weights will not be empty. It is also possible to add two weights
// to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string "not possible"

import Response from '../models/response';
import { ScaleBalancingChallenge } from '../challenges/ScaleBalancingChallenge';

export default ((req, res) => {

    let weightScale = req.body.weightScale;
    let weights = req.body.weights;

    let scaleBalancingChallenge = ScaleBalancingChallenge(weightScale, weights)

    let challenge = new Response('descriptionnnn', scaleBalancingChallenge);

    res.status(200).send(challenge);
})