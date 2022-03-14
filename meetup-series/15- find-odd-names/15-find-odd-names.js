const list = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

//One solution with boucle for
const findOddNames = () => {
    const odd = list.filter((list) => {
        let sum = 0;
        for (let i = 0; i < list.firstName.length; i++) {
            sum += list.firstName.charCodeAt(i);
        }
        if (sum % 2 !== 0) {
            return list.firstName;
        }
    })
    return odd;
}

console.log(findOddNames());