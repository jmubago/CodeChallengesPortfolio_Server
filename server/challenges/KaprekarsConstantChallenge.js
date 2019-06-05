export function KaprekarsConstantChallenge(num) {
    let loops = 0;

    // loop until num equals 6174
    while (num !== 6174) {
        let resultAsc = ascNumber(num);
        let resultDesc = descNumber(num);
        num = resultDesc - resultAsc;
        loops++;
    }

    // Calculate Ascending Number
    function ascNumber(num) {
        let numToAsc = num.toString().split("");
        // if number has less than 4 digits, add zeroes
        if (numToAsc.length < 4) {
            numToAsc = addZeroes(numToAsc).toString().split("").sort().join("");
        }
        if (typeof(numToAsc) === "object") {
            let ascNum = numToAsc.sort().join("");
            return parseInt(ascNum);
        } else {
            return numToAsc;
        }
    }

    // Calculate descending Number
    function descNumber(num) {
        let numToDesc = num.toString().split("");
        // if number has less than 4 digits, add zeroes
        if (numToDesc.length < 4) {
            numToDesc = addZeroes(numToDesc).toString().split("").sort().reverse().join("");
        }
        if (typeof(numToDesc) === "object") {
            let descNum = numToDesc.sort().reverse().join("");
            return parseInt(descNum);
        } else {
            return numToDesc;
        }
    }

    // add zeroes until a nunber has 4 digits
    function addZeroes(num) {
        let numToAddZeroes = num;
        for (let i = num.length; i < 4; i++) {
            numToAddZeroes.push("0");
        }
        return parseInt(numToAddZeroes.join(""));
    }
    return loops;
}