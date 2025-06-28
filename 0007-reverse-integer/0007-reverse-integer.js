/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    const result = isNegative ? -Number(absReversed) : Number(absReversed);

    if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
        return 0;
    }

    return result;
};