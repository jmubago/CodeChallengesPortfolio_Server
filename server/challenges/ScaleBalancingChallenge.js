export function ScaleBalancingChallenge(weightScale, weights) {
    // Weights in descending order
    weights.sort();
    weights.reverse();

    // Lightest side of the weightscale
    let lightSide = 0;
    let heavySide = 0;
    if (weightScale[0] > weightScale[1]) {
        lightSide = parseInt(weightScale[1]);
        heavySide = parseInt(weightScale[0]);
    } else if (weightScale[0] < weightScale[1]) {
        lightSide = parseInt(weightScale[0]);
        heavySide = parseInt(weightScale[1]);
    } else if (weightScale[0] = weightScale[1]) {
        return 'Weights in the scale balance are equal';
    }

    let addWeight = [];
    let flagLightSide = lightSide;

    // Putting weights on same side of weight scale
    let oneSideAddedWeight = addWeightToOneSide(weights);

    // Putting weights on both sides of weight scale
    let bothSidesAddedWeight = addWeightToBothSides(weights);

    function addWeightToOneSide(weights) {
        let usedOneSideWeights;
        weights.forEach((weight, index) => {
            weight = parseInt(weight);
            let sum = (flagLightSide + weight);

            // Add weights while the sum equals or is smaller than heavyside
            if (sum <= heavySide) {
                flagLightSide += weight;
                addWeight.push(weights[index]);
            }
            // Added weights equal heavySide
            if (flagLightSide == heavySide) {
                addWeight.sort();
                // Only adding one weight
                if (addWeight[1] != undefined) {
                    usedOneSideWeights = addWeight;
                }
                // Adding two weights
                else {
                    usedOneSideWeights = addWeight;
                }
            }
        });
        return usedOneSideWeights;
    }

    function addWeightToBothSides(weights) {
        let addWeight = [];
        let smallScaleIndex = weights.length - 1;
        // For every available weight, check every possible weight combination
        for (let i = weights.length - 1; i > 0; i--) {
            // If two weights have been added already return it
            if (addWeight.length >= 2) {
                return addWeight;
            }
            // Check from heaviest to lightest available weight to obtain the smallest number of used weights
            for (let y = 0; y <= weights.length - 1; y++) {
                let newBigWeight = heavySide + parseInt(weights[y]);
                let newSmallWeight = lightSide + parseInt(weights[smallScaleIndex]);
                if (newBigWeight == newSmallWeight) {
                    addWeight.push(weights[y]);
                    addWeight.push(weights[smallScaleIndex]);
                }
            }
            if (smallScaleIndex > 0) {
                smallScaleIndex--;
            }
        }
        if (addWeight[0] != undefined) {
            return addWeight;
        } else {
            return undefined;
        }
    }
    console.log(oneSideAddedWeight, bothSidesAddedWeight);
    // Return weights added to just one side of scale balance. Max 2 weights total.
    if (oneSideAddedWeight != undefined && oneSideAddedWeight.length <= 2) {
        return oneSideAddedWeight;
    }
    // Return weights added to both sides of scale balance. Max 2 weights total.
    else if (bothSidesAddedWeight != undefined && bothSidesAddedWeight.length <= 2) {
        return bothSidesAddedWeight;
    } else {
        return 'Not possible';
    }
}