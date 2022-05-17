//Find square numbers : 
// num * num : square numbers


//One Solution
const isSquare = function (n) {
    let result = false
    const max = 1000000

    for (let i = 0; i <= max; i++) {
        if (i * i === n) {
            result = true
        }
    }
    return result
}
// console.log(isSquare(26));


//BEST Practices
function isSquareBest(n) {
    return Math.sqrt(n) % 1 === 0;
}

console.log(isSquareBest(140));

