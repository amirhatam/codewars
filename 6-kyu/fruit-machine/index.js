//First Solution without Parameters (FULL GAME)
const play = () => {
    const reel = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"]
    let spinRes = []

    for (let i = 0; i < 3; i++) {
        const random = Math.ceil(Math.random() * 9)
        spinRes.push(reel[random])
    }

    const object = {}
    spinRes.map(e => object[e] = object[e] ? object[e] + 1 : 1)


    let score = 0
    if (object['Wild'] === 3) score += 100
    if (object['Wild'] === 2) score += 10
    if (object['Star'] === 3) score += 90
    if (object['Star'] === 2 && object['Wild'] !== 1) score += 9
    if (object['Star'] === 2 && object['Wild'] === 1) score += 18
    if (object['Bell'] === 3) score += 80
    if (object['Bell'] === 2 && object['Wild'] !== 1) score += 8
    if (object['Bell'] === 2 && object['Wild'] === 1) score += 16
    if (object['Shell'] === 3) score += 70
    if (object['Shell'] === 2 && object['Wild'] !== 1) score += 7
    if (object['Shell'] === 2 && object['Wild'] === 1) score += 14
    if (object['Seven'] === 3) score += 60
    if (object['Seven'] === 2 && object['Wild'] !== 1) score += 6
    if (object['Seven'] === 2 && object['Wild'] === 1) score += 12
    if (object['Cherry'] === 3) score += 50
    if (object['Cherry'] === 2 && object['Wild'] !== 1) score += 5
    if (object['Cherry'] === 2 && object['Wild'] === 1) score += 10
    if (object['Bar'] === 3) score += 40
    if (object['Bar'] === 2 && object['Wild'] !== 1) score += 4
    if (object['Bar'] === 2 && object['Wild'] === 1) score += 8
    if (object['King'] === 3) score += 30
    if (object['King'] === 2 && object['Wild'] !== 1) score += 3
    if (object['King'] === 2 && object['Wild'] === 1) score += 6
    if (object['Queen'] === 3) score += 20
    if (object['Queen'] === 2 && object['Wild'] !== 1) score += 2
    if (object['Queen'] === 2 && object['Wild'] === 1) score += 4
    if (object['Jack'] === 3) score += 10
    if (object['Jack'] === 2 && object['Wild'] !== 1) score += 1
    if (object['Jack'] === 2 && object['Wild'] === 1) score += 2

    return score
}

// console.log(play());



//First Solution 
const fruits = (reels, spins) => {
    const object = {}
    const array = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]].map(e => object[e] = object[e] ? object[e] + 1 : 1)

    let score = 0
    if (object['Wild'] === 3) score += 100
    if (object['Wild'] === 2) score += 10
    if (object['Star'] === 3) score += 90
    if (object['Star'] === 2 && object['Wild'] !== 1) score += 9
    if (object['Star'] === 2 && object['Wild'] === 1) score += 18
    if (object['Bell'] === 3) score += 80
    if (object['Bell'] === 2 && object['Wild'] !== 1) score += 8
    if (object['Bell'] === 2 && object['Wild'] === 1) score += 16
    if (object['Shell'] === 3) score += 70
    if (object['Shell'] === 2 && object['Wild'] !== 1) score += 7
    if (object['Shell'] === 2 && object['Wild'] === 1) score += 14
    if (object['Seven'] === 3) score += 60
    if (object['Seven'] === 2 && object['Wild'] !== 1) score += 6
    if (object['Seven'] === 2 && object['Wild'] === 1) score += 12
    if (object['Cherry'] === 3) score += 50
    if (object['Cherry'] === 2 && object['Wild'] !== 1) score += 5
    if (object['Cherry'] === 2 && object['Wild'] === 1) score += 10
    if (object['Bar'] === 3) score += 40
    if (object['Bar'] === 2 && object['Wild'] !== 1) score += 4
    if (object['Bar'] === 2 && object['Wild'] === 1) score += 8
    if (object['King'] === 3) score += 30
    if (object['King'] === 2 && object['Wild'] !== 1) score += 3
    if (object['King'] === 2 && object['Wild'] === 1) score += 6
    if (object['Queen'] === 3) score += 20
    if (object['Queen'] === 2 && object['Wild'] !== 1) score += 2
    if (object['Queen'] === 2 && object['Wild'] === 1) score += 4
    if (object['Jack'] === 3) score += 10
    if (object['Jack'] === 2 && object['Wild'] !== 1) score += 1
    if (object['Jack'] === 2 && object['Wild'] === 1) score += 2

    return score
}



//BEST PRACTICES without Parameters (FULL GAME)
function fruitPlay() {
    const reel = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild']
    let reels = []
    let spins = []

    for (let i = 0; i < 3; i++) {
        const random = Math.ceil(Math.random() * 9)
        spins.push(random + 1)
        reels.push(reel[random])
    }

    // console.log(spins, reels);
    let [a, b, c] = spins.sort((a, b) => a - b);


    let score = 0

    if (a === b && b === c) {
        score = a * 10;
    }

    if (a === b) {
        if (c === 10) {
            score += a * 2
        } else { score += a }
    }

    if (b === c) {
        score += b
    } else { score += 0 }

    return score
}

console.log(fruitPlay());



function fruit(reels, spins) {
    let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];

    let [a, b, c] = reels
        .map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
        .sort((a, b) => a - b);

    if (a === b && b === c)
        return a * 10;

    if (a === b)
        return c === 10 ? a * 2 : a;

    return b === c ? b : 0;
}