const pattern = [0, 0, 1]

//One solution
const fibonacci = (pattern, n) => {
    let sequence = [...pattern]

    for (let i = 0; i < n - pattern.length; i++) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2] + sequence[sequence.length - 3])
    }

    return sequence.slice(0, n) //return trib - length of n
}

console.log(fibonacci(pattern, 15))

