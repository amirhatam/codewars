//First Solution
const findMultiples = (integer, limit) => {
    let res = []
    for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            res.push(i)
        }
    }
    return res
}


// findMultiples(2, 6)
console.log(findMultiples(2, 6));