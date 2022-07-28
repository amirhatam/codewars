//Solution A
const solutionA = (a) => {
    let res = 0
    a.map(e => res += parseInt(e))
    return res
}

console.log(solution(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));