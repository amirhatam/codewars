//First solution
const solution = (A, B) => {
    let res = []
    A.map(e => {
        if (e % B === 0) { res.push(e) }
    })
    return res
}

console.log(solution([1, 2, 3, 4, 5, 6], 2));