//Solution A
const solution = (s) => {
    let removeSpace = s.split(' ').join('')
    return removeSpace.split('').join(' ').toUpperCase()
}


console.log(solution("Why isn't my code working?"));