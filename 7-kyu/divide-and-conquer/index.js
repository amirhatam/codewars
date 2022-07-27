//Solution A
const solution = (a) => {
    let totalNum = 0
    let totalStr = 0

    a.map(e => {
        if (typeof e === 'number')
            totalNum += e
        else if (typeof e === 'string')
            totalStr += parseInt(e)
    })
    return totalNum - totalStr
}

console.log(solution([9, 3, '7', '3']));