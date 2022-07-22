// First Solution
const getPredict = (age1, age2, age3, age4, age5, age6, age7, age8) => {
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]

    //Multiply each number by itself
    let multiply = arr.map(e => e * e)

    //Add them all together
    let addAll = multiply.reduce((a, b) => a + b)

    //Take the square root of the result & Divide by two
    return Math.floor(Math.sqrt(addAll) / 2)
}

// console.log(getPredict(65, 60, 75, 55, 60, 63, 64, 45));

//Short Way
const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]

    return Math.floor(Math.sqrt(arr.map(e => e * e).reduce((a, b) => a + b)) / 2)
}

console.log(getPredict(65, 60, 75, 55, 60, 63, 64, 45));
