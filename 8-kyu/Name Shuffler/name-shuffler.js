// Premier solution
const reverse = (s) => {
    let splitName = s.split("")
    let indexOfSpace = splitName.indexOf(' ')
    let result = []

    //Add LastName to result
    for (let i = indexOfSpace + 1; i < splitName.length; i++) {
        let item = splitName[i]
        result.push(item)
    }

    result.push(' ') // Add space between LastName and FirstName

    //Add FirstName to result
    for (let i = 0; i < indexOfSpace; i++) {
        let item = splitName[i]
        result.push(item)
    }
    const joinRes = result.join('')


    return JSON.stringify(joinRes)
}

// console.log(reverse('john McClane'));

//Sec Solution
function nameShuffler(str) {
    const fullName = str.split(" ");
    return [fullName[1], fullName[0]].join(" ");
}

console.log(nameShuffler('john McClane'));