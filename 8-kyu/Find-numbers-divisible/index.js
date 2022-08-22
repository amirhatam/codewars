//First solution
const solution = (A, B) => {
    let res = []
    A.map(e => {
        if (e % B === 0) { res.push(e) }
    })
    return res
}

// console.log(solution([1, 2, 3, 4, 5, 6], 2));

//Best practices
function divisibleBy(numbers, divisor) {
    return numbers.map(n => n % divisor === 0)
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));