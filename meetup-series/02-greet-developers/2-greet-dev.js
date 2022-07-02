const list = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];



//One solution with map & Object.assign
const greetDev = () => {
    let newList = []
    list.map(e => {
        let msgGreet = {
            greeting: `Hi ${e.firstName}, what do you like the most about ${e.language}?`
        }
        newList.push(Object.assign(e, msgGreet))
    })
    return newList
}
// console.log(greetDev());

//Another solution with map & splash
const greetDevs = list => list.map(dev => ({ ...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?` }));

console.log(greetDevs(list));



//Best practice with forEach
function greetDevelopers() {
    list.forEach(function (developer) {
        developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    });

    return list;
}

// console.log(greetDev());