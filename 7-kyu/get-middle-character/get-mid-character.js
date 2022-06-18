//First Solution
const getMidCharacter = (s) => {
    const midChar = Math.floor(s.length / 2)
    if (s.length % 2 === 0) {
        return s.substring(midChar - 1, midChar + 1)
    } else {
        return s.charAt(midChar)
    }
}


console.log(getMidCharacter("testing"));