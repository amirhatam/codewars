const list = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
var list2 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];
list3 =
    [
        { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", age: 22, language: "JavaScript" },
        { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 30, language: "Clojure" },
        { firstName: "Emma", lastName: "B.", country: "Norway", continent: "Europe", age: 19, language: "Clojure" }
    ]

list9 =
    [
        { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 29, language: "Ruby" },
        { firstName: "Amar", lastName: "V.", country: "Bosnia and Herzegovina", continent: "Europe", age: 32, language: "Ruby" }
    ]

list4 =
    [
        { firstName: "Sofia", lastName: "P.", country: "Italy", continent: "Europe", age: 41, language: "Clojure" },
        { firstName: "Jayden", lastName: "P.", country: "Jamaica", continent: "Americas", age: 42, language: "JavaScript" },
        { firstName: "Sou", lastName: "B.", country: "Japan", continent: "Asia", age: 43, language: "Python" },
        { firstName: "Rimas", lastName: "C.", country: "Jordan", continent: "Asia", age: 44, language: "Java" }
    ]

list8 =
    [
        { firstName: "Alexander", lastName: "F.", country: "Russia", continent: "Europe", age: 89, language: "Java" },
        { firstName: "Fatima", lastName: "K.", country: "Saudi Arabia", continent: "Asia", age: 21, language: "Clojure" },
        { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", age: 22, language: "JavaScript" },
        { firstName: "Nikola", lastName: "H.", country: "Serbia", continent: "Europe", age: 29, language: "Python" },
        { firstName: "Jakub", lastName: "I.", country: "Slovakia", continent: "Asia", age: 28, language: "Java" },
        { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Americas", age: 89, language: "JavaScript" },
        { firstName: "Luka", lastName: "J.", country: "Slovenia", continent: "Oceania", age: 29, language: "Clojure" },
        { firstName: "Mariam", lastName: "B.", country: "Egypt", continent: "Africa", age: 89, language: "Python" }
    ]

//Long solution
const validationContinents = () => {
    let Africa = 0
    let Americas = 0
    let Asia = 0
    let Europe = 0
    let Oceania = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].continent === 'Africa') {
            Africa++
        } else if (list[i].continent === 'Americas') {
            Americas++
        } else if (list[i].continent === 'Asia') {
            Asia++
        } else if (list[i].continent === 'Europe') {
            Europe++
        } else if (list[i].continent === 'Oceania') {
            Oceania++
        }
    }
    let res = false
    if (Africa > 0 && Americas > 0 && Asia > 0 && Europe > 0 && Oceania > 0) {
        res = true
    }
    return res
}

// console.log(validationContinents());

//Best practices
const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
const allContinents = () => continents.every(e => list.some(y => e == y.continent));

console.log(allContinents());