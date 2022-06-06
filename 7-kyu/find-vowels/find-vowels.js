// First Solution
const vowelsIndex = (s) => {
    const input = s.toLowerCase().split('')
    let res = []

    for (let i = 0; i < input.length; i++) {
        // if (input[i] === 'a')
        //     res.push(i + 1)
        // else if (input[i] === 'e')
        //     res.push(i + 1)
        // else if (input[i] === 'i')
        //     res.push(i + 1)
        // else if (input[i] === 'o')
        //     res.push(i + 1)
        // else if (input[i] === 'u')
        //     res.push(i + 1)
        // else if (input[i] === 'y')
        //     res.push(i + 1)

        // DRY Code
        if (
            input[i] === "a" ||
            input[i] === "e" ||
            input[i] === "i" ||
            input[i] === "o" ||
            input[i] === "u" ||
            input[i] === "y"
        ) {
            res.push(i + 1)
        }
    }

    return res
}

console.log(vowelsIndex('YoMama'));