//First Solution
const solution = (name, price = 30) => {
    let res = 0
    name.split('').map(e => res += price)
    return res
}

console.log(solution('amir'));