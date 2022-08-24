//First solution
const solution = (N) => {
    let res = []
    N.toString().split("").map(e => res.unshift(parseInt(e)))

    return res
}

console.log(solution(35231));