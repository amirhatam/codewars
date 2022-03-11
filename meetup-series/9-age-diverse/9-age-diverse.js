var list = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

const list3 = [
    { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
    { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
];


//Long solution with boucle for & if
const ageDiverse = () => {
    const rateAge = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < list.length; i++) {
        if (list[i].age >= 10 && list[i].age <= 20)
            rateAge[0]++
        else if (list[i].age >= 20 && list[i].age < 30)
            rateAge[1]++
        else if (list[i].age >= 30 && list[i].age < 40)
            rateAge[2]++
        else if (list[i].age >= 40 && list[i].age < 50)
            rateAge[3]++
        else if (list[i].age >= 50 && list[i].age < 60)
            rateAge[4]++
        else if (list[i].age >= 60 && list[i].age < 70)
            rateAge[5]++
        else if (list[i].age >= 70 && list[i].age < 80)
            rateAge[6]++
        else if (list[i].age >= 80 && list[i].age < 90)
            rateAge[7]++
        else if (list[i].age >= 90 && list[i].age < 100)
            rateAge[8]++
        else if (list[i].age >= 100 && list[i].age < 200)
            rateAge[9]++
    }
    return rateAge.every(e => e >= 1)
}

// console.log(ageDiverse());

//BEST practices with map & if
function ageDiverseMap() {
    const ageList = list.map(x => x.age)
    if (
        ageList.some(x => (x >= 0 && x < 20)) &&
        ageList.some(x => (x >= 20 && x < 30)) &&
        ageList.some(x => (x >= 30 && x < 40)) &&
        ageList.some(x => (x >= 40 && x < 50)) &&
        ageList.some(x => (x >= 50 && x < 60)) &&
        ageList.some(x => (x >= 60 && x < 70)) &&
        ageList.some(x => (x >= 70 && x < 80)) &&
        ageList.some(x => (x >= 80 && x < 90)) &&
        ageList.some(x => (x >= 90 && x < 100)) &&
        ageList.some(x => (x >= 100 && x < 200))
    ) {
        return true
    } else {
        return false
    }
}
console.log(ageDiverseMap());

// BEST practices 
const isAgeDiverse = () => {
    return list.some(h => h.age >= 100)
        ? [10, 20, 30, 40, 50, 60, 70, 80, 90].every(e => list.some(x => x.age - e >= 0 && x.age - e <= 9))
        : false
}


// console.log(isAgeDiverse());