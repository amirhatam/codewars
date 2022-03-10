var list = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

//One solution with loop for
const sameLang = () => {
    let firstIndex = list[0].language
    let count = 0
    let res = false
    for (let i = 0; i < list.length; i++) {
        if (list[i].language === firstIndex) {
            count++
        }
        if (count === list.length) {
            res = true
        }
    }
    return res
}

console.log(sameLang());