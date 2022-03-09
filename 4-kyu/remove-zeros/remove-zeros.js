let array = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

//One solution BUT NOT ACCEPTED !
const removeZero = () => [...array[`filter`](v => v !== 0 && v !== '0'), ...array[`filter`](v => v === 0 || v === '0')]

//Best Practice
function removeZeros() {
    const head = []
    const tail = []
    for (const e of array) {
        if (e === 0 || e === "0") {
            tail[tail.length] = e
        } else {
            head[head.length] = e
        }
    }
    return [...head, ...tail]
}

console.log(removeZeros());