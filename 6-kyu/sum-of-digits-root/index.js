//First Solution
const sumOfDigit = (n) => {
    let arr = n.toString().split('').map(Number)
    let res = arr.reduce((a, b) => a + b, 0)

    for (let i = 0; i < arr.length; i++) {
        if (res > 9) {
            arr = res.toString().split('').map(Number)
            res = arr.reduce((a, b) => a + b, 0)
        }
    }
    return res
}

console.log(sumOfDigit(132189));