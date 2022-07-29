//Solution A
const solutionA = (x, n) => {
    const multiplesX = x * n
    let res = []
    for (let i = x; i <= multiplesX; i++) {
        if (i % x === 0) { res.push(i) }
    }
    return res
}


console.log(solutionA(2, 5));