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

    return result.join('')
}

console.log(reverse('john McClane'));