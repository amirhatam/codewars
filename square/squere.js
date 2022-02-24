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

const result = isSquare(81)

console.log(result);

