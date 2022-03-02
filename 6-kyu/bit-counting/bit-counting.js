/*
Number of bits means the minimum number of bits required to represent the number, 
excluding of course leading zeros.
We can easily convert to binary using toString, and count the length of 
the resulting value to get the number of bits.
*/

const countBits = function (n) {
    // make an array with the bit result
    const bitArray = (n).toString(2).split('');

    // make a sum with the array and make the index a Number
    const result = bitArray.reduce((sum, num) => sum + Number(num), 0);

    return result;
};

const result = countBits(5)
console.log(result);