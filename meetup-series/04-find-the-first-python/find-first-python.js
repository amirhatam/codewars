var list = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

//Best practice with find & if(? :)
const firstPython = () => {
    let res = list.find(e => e.language == 'Python')
    return res ? `${res.firstName}, ${res.country}` : "There will be no Python developers"
}


console.log(firstPython());