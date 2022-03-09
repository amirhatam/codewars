const list = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

//One solution with map
const devRuby = () => {
    let res = false
    list.map(e => {
        if (e.language == 'Ruby') {
            res = true
        }
    })
    return res
}

console.log(devRuby());