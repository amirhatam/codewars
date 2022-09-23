const squareOrSquareRoot = (A) => {
    return A.map((e, i) => {
        if (i === 0) {
            return Math.sqrt(e)
        } else {
            return e * e
        }
    })
}

console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]));