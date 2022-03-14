const list = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

//One Solution
const askForMissingDetails = () => {
    let newList = []
    newList = list.filter(dev => Object.keys(dev).some(e => dev[e] === null))
    return newList.map(dev => ({ ...dev, question: `Hi, could you please provide your ${Object.keys(dev).find(e => dev[e] === null)}.` }))
}

// console.log(askForMissingDetails());

//BEST practices
const missingDetails = () => {
    return list.filter((dev) => {
        for (let key in dev) {
            if (dev[key] === null) {
                dev['question'] = `Hi, could you please provide your ${key}.`;
                return dev;
            }
        }
    });
}

console.log(missingDetails());