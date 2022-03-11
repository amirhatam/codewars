var list = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

//BINGO My solution is a BEST practices
const createUsername = () => {
    let newList = []
    list.map(e => {
        let createUser = {
            username: `${e.firstName.toLocaleLowerCase()}${e.lastName.substring(0, 1).toLocaleLowerCase()}${new Date().getFullYear() - e.age}`
        }
        newList.push(Object.assign(e, createUser))
    })
    return newList
}

console.log(createUsername());
