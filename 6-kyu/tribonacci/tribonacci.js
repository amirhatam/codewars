const pattern = [0, 0, 1]

//One solution
const tribonacci = (pattern, n) => {
    let sequence = [...pattern]

    for (let i = 0; i < n - pattern.length; i++) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2] + sequence[sequence.length - 3])
    }

    return sequence.slice(0, n) //return trib - length of n
}

console.log(tribonacci(pattern, 15))

//BEST Practices
function tribonacciP(signature, n) {
    for (var i = 0; i < n - 3; i++) { // iterate n times
        let res = signature[i] + signature[i + 1] + signature[i + 2]
        if (res <= n) {
            signature.push(res); // add last 3 array items and push to trib
        }
    }
    return signature.slice(0, n); //return trib - length of n
}
// console.log(tribonacciP(pattern, 15))