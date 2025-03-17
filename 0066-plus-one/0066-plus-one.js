/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const sumWithDigits = BigInt(digits.join("")) + 1n;
    return sumWithDigits.toString().split("").map(Number);
};