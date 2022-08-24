//First solution
const solution = (N) => {
    let res = []
    N.toString().split("").map(e => res.unshift(parseInt(e)))

    return res
}

console.log(solution(35231));

//Best practices
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}