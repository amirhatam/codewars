// First solution 
function numberOfPairs(gloves) {

    let glovesNum = gloves.reduce((acc, elem) => {
        acc[elem] = (acc[elem] || 0) + 1;
        return acc;
    }, {})

    let countPair = 0;

    for (color in glovesNum) {
        countPair += Math.floor(glovesNum[color] / 2)
    }
    return countPair
}


console.log(numberOfPairs(["red", "green", "red", "blue", "blue", "blue", "blue"]));

