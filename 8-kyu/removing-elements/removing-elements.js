const arr = ["Keep", "Remove", "Keep", "Remove", "Keep"]

// First solution
const removeSec = (a) => {
    let newArr = []

    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            newArr.push(a[i])
        }
    }
    return newArr
}

console.log(removeSec(arr));