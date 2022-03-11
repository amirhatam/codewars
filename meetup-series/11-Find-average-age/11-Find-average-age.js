var list = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
var list2 = [
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
];

//One solution
const getAvrageAge = () => {
    const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    let ageList = list.map(e => e.age)
    return Math.round(average(ageList))

}
// console.log(getAvrageAge());

//Best Solution
const averageAge = () => Math.round(list.reduce((sum, obj) => sum + obj.age, 0) / list.length);

console.log(averageAge());
